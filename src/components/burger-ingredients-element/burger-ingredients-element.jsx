import React from 'react';
import  propTypes  from 'prop-types';
import { useDrag } from 'react-dnd';

import { ingredientTypes } from '../../utils/variables';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from '../burger-ingredients/burger-ingredients.module.css';
import { useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';



export function BurgerIngredientsElement({item}) {

    const { ingredients, bun } = useSelector((state) => state.constructorIngredients);
    const location = useLocation();
    const ingredientId = item['_id'];

    const counter = React.useMemo(() => {
        let count = 0;
        if (item.type !== 'bun') {
            ingredients.map((element) => {
                if(element._id === item._id) {
                    ++count;
                }   
            })
        }
        else {
            bun.map((element) => {
                if(element._id === item._id) {
                    return count = 2;
                }
            })
        }
        return count
    }, [ingredients, bun])

    const [{}, dragRef] = useDrag({
        type: 'ingredient',
        item: item,
        collect: (monitor) => ({
            isDrag: monitor.isDragging()
        })
    })

    return(
        <Link
            key={ingredientId}
            to={{
            pathname: `/ingredients/${ingredientId}`,
            state: { background: location },
            }}
            className={styles.link}
        >
            <div className={styles.card_container} ref={dragRef}>
                    <div className={styles.card} >
                        {counter !==0 &&(
                            <Counter count={counter} size="default" />
                        )}
                        <img src={item.image} alt={`картинка ${item.name}`} className={`${styles.card_image} p-4`}/>
                        <div className={`${styles.price_container} p-1`}>
                            <p className={`${styles.price_text} text text_type_digits-default`}>{item.price}</p>
                            <CurrencyIcon type="primary" />
                        </div>
                        <p className={`${styles.card_caption} text text_type_main-default`}>{item.name}</p>
                    </div>
                </div>
        </Link>
    );
}

BurgerIngredientsElement.ReactPropTypes = {
    item: ingredientTypes.isRequired,
    onOpen: propTypes.func.isRequired
}