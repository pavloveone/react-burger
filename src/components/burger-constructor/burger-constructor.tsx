import React from "react";
import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from '../../services/hooks/hooks';
import { addBun } from "../../services/actions/constructor";
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { getOrder } from "../../services/actions/order-details";
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Modal } from "../modal/modal";
import { ConstructorIngredientsContainer } from '../constructor-ingredients-container/constructor-ingredients-container';

import { OrderDetails } from "../order-details/order-details";

import { CLOSE_ORDER, SHOW_ORDER } from '../../services/actions/order-details';

import styles from './burger-constructor.module.css';
import { useDrop } from "react-dnd";
import { TIngredient } from "../../utils/types";
import { Spinner } from "../spinner/spinner";

export const BurgerConstructor = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const { bun } = useSelector((state) => state.constructorIngredients);
    const  ingredientsConstructor  = useSelector((state) => state.constructorIngredients.ingredients);
    const { isVisible, orderNumber, isLoading } = useSelector((state) => state.orderDetails);
    const { isAuth } = useSelector((state) => state.login);

    const [, dragRef] = useDrop({
        accept: 'ingredient',
        drop(item: TIngredient) {
            addBun(item, dispatch)
        }
    })

    function handleOpenOrder() {
        
        if (bun.length > 0 && ingredientsConstructor.length > 0 && isAuth) {
              dispatch(getOrder(bun, ingredientsConstructor));
              dispatch({ type: SHOW_ORDER })
        } else {
            history.push('/login');
        }
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
      <div className={styles.burger_constructor} ref={dragRef} data-testid='drop_box'>
          { bun.length > 0 && 
          <ConstructorElement
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
            <Button htmlType="button" type="primary" size="medium" onClick={handleOpenOrder} disabled={(bun.length > 0 && ingredientsConstructor.length > 0) ? false : true} data-testid='button'>Оформить заказ</Button>
        </div>
        {isVisible && orderNumber &&(
            <Modal onClose={handleCloseOrder} >
                <OrderDetails />
            </Modal>
        )}
        {isLoading && (
            <Spinner description={'Передаем заказ на кухню. Пожалуйста, подождите'} />
        )}
      </div>
    )
  }