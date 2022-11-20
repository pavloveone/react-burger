import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrop, useDrag } from 'react-dnd';
import styles from '../burger-constructor/burger-constructor.module.css';

import { DELETE_INGREDIENT, REORDER_INGREDIENT } from '../../services/actions/constructor';




export const ConstructorItem = ({item, index}) => {
    const dispatch = useDispatch();

    const deleteItem = () => {
        dispatch({
            type: DELETE_INGREDIENT,
            id: item.id
        })
    }

    const ref = useRef(null);

    const [{handlerId}, drop] = useDrop({
        accept: 'constructor',
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId()
            }
        },
        hover: function(item, monitor) {
            if(!ref.current) {
                return
            }
            const dragIndex = item.index;

            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect();

            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

            const clientOffset = monitor.getClientOffset();

            const hoverClientY = clientOffset.y - hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            } 
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            } 

            dispatch({
                type: REORDER_INGREDIENT,
                dragIndex: dragIndex,
                hoverIndex: hoverIndex,
            });

            item.index = hoverIndex;
        },
  });

    const [{ isDragging }, drag] = useDrag({
        type: "constructor",
        item: () => {
            return { id: item._id, index };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    drag(drop(ref));
    const opacity = isDragging ? 0 : 1;

    return(
        <div className={styles.content_element} style={{opacity}} ref={ref}>
            <>
            <DragIcon type="primary" />
            </>
            <ConstructorElement
                key={item.id}
                text={item.name}
                price={item.price}
                thumbnail={item.image}
                handleClose={deleteItem}
            />
        </div>
            
    );
}