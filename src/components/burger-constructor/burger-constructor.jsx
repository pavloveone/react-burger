import React from "react";
import  propTypes  from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { getOrder } from "../../services/actions/order-details";
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Modal } from "../modal/modal";
import { ConstructorIngredientsContainer } from '../constructor-ingredients-container/constructor-ingredients-container';
import { ADD_BUN, ADD_INGREDIENT } from "../../services/actions/constructor";
import { OrderDetails } from "../order-details/order-details";
import { ingredientTypes } from '../../utils/variables';
import { CLOSE_ORDER, SHOW_ORDER } from '../../services/actions/order-details';

import styles from './burger-constructor.module.css';
import { useDrop } from "react-dnd";

export const BurgerConstructor = () => {

    const dispatch = useDispatch();

    const { bun } = useSelector((state) => state.constructorIngredients);

    const  ingredientsConstructor  = useSelector((state) => state.constructorIngredients.ingredients);
    const { isVisible } = useSelector((state) => state.orderDetails);



    const [{}, dragRef] = useDrop({
        accept: 'ingredient',
        drop(item) {
            if(item.type === 'bun') {
                dispatch({
                    type: ADD_BUN,
                    payload: {
                        ...item, 
                        id: uuidv4()
                    }
                })
            } else {
                dispatch({
                    type: ADD_INGREDIENT,
                    payload: {
                        ...item,
                        id: uuidv4()
                    }
                })
            }
        }
    })

    function handleOpenOrder() {
        dispatch(getOrder(bun, ingredientsConstructor));
        dispatch({
            type: SHOW_ORDER
        })
    };

    function handleCloseOrder() {
        dispatch({
            type: CLOSE_ORDER
        })
    };

    const getSum = () => {
        const sum = [...ingredientsConstructor, ...bun];
        return sum.reduce((acc, curr) => curr.type === 'bun' ? acc  + curr.price * 2 : acc + curr.price, 0);
    };
    

    return (
      <div className={styles.burger_constructor} ref={dragRef} >
          { bun.length > 0 && <ConstructorElement
                type="top"
                isLocked={true}
                text={bun[0].name + ' (верх)'}
                price={bun[0].price}
                thumbnail={bun[0].image}

            />}
            <ConstructorIngredientsContainer />
            { bun.length > 0 && 
                <ConstructorElement
                    text={bun[0].name + ' (низ)'}
                    thumbnail={bun[0].image}
                    isLocked={true}
                    price={bun[0].price}
                    type="bottom"
                />}
        <div className={styles.order_info}>
            <div className={styles.price_container}>
                <p className={`${styles.price} text text_type_digits-medium`}>{getSum()}</p>
                <CurrencyIcon type="primary" />
            </div>
            <Button htmlType="button" type="primary" size="medium" onClick={handleOpenOrder}>Оформить заказ</Button>
        </div>
        {isVisible && (
            <Modal onClose={handleCloseOrder} >
                <OrderDetails />
            </Modal>
        )}
      </div>
    )
  }