import React from "react";
import  propTypes  from 'prop-types';

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-constructor.module.css';
import { Modal } from "../modal/modal";
import { OrderDetails } from "../order-details/order-details";

export const BurgerConstructor = ({data}) => {

    const withOutBunArr = data.filter((item) => item.type !== 'bun');
    const bun = data.find((item) => item.name === 'Краторная булка N-200i');

    const [isVisibleOrder, setIsVisibleOrder] = React.useState(false)


    function handleOpenOrder(e) {
        setIsVisibleOrder(true);
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
          <div className={styles.content}>
              {
                  withOutBunArr.map((item) => (
                      <ConstructorElement
                      key={item._id}
                      text={item.name}
                      price={item.price}
                      thumbnail={item.image}
                      />
                  ))}
            </div>
            <ConstructorElement
                text={bun.name + ' (низ)'}
                thumbnail={bun.image}
                isLocked={true}
                price={bun.price}
                type="bottom"
            />
        <div className={styles.order_info}>
            <div className={styles.price_container}>
                <p className={`${styles.price} text text_type_digits-medium`}>610</p>
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
      data: propTypes.arrayOf.isRequired
  }