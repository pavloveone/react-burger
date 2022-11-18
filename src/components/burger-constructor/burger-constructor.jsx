import React from "react";
import  propTypes  from 'prop-types';

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Modal } from "../modal/modal";
import { MainIngredientsContainer } from '../main-ingredients-container/main-ingredients-container';
import { OrderDetails } from "../order-details/order-details";
import { ingredientTypes } from '../../utils/variables';

import { checkReponse } from "../../utils/variables";

import { DataContext } from '../../contexts/data-context';

import styles from './burger-constructor.module.css';

export const BurgerConstructor = () => {

    const { data } = React.useContext(DataContext);
    const bun = data.find((item) => item.type === 'bun');

    const getSum = () => 

        data.reduce((acc, curr) => curr.type === 'bun' ? acc  + curr.price * 2 : acc + curr.price, 0);

    const getOrder = () => {

        const ingredientsId = data.map((item) => item._id);

        fetch('https://norma.nomoreparties.space/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json;charset=utf-8"
            },
            body: JSON.stringify({
                ingredients: ingredientsId
            })
        })
        .then(checkReponse)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
    const [isVisibleOrder, setIsVisibleOrder] = React.useState(false)


    function handleOpenOrder(e) {
        setIsVisibleOrder(true);
        getOrder();
    };

    function handleCloseOrder(e) {
        setIsVisibleOrder(false);
    };

    return (
      <div className={styles.burger_constructor}>
          <ConstructorElement
                type="top"
                isLocked={true}
                text={bun.name + ' (верх)'}
                price={bun.price}
                thumbnail={bun.image}
            />
            <MainIngredientsContainer />
            <ConstructorElement
                text={bun.name + ' (низ)'}
                thumbnail={bun.image}
                isLocked={true}
                price={bun.price}
                type="bottom"
            />
        <div className={styles.order_info}>
            <div className={styles.price_container}>
                <p className={`${styles.price} text text_type_digits-medium`}>{getSum()}</p>
                <CurrencyIcon type="primary" />
            </div>
            <Button type="primary" size="medium" onClick={handleOpenOrder}>Оформить заказ</Button>
        </div>
        {isVisibleOrder && (
            <Modal onClose={handleCloseOrder} >
                <OrderDetails />
            </Modal>
        )}
      </div>
    )
  }

  BurgerConstructor.ReactPropTypes = {
      data: propTypes.arrayOf(ingredientTypes.isRequired).isRequired
  }