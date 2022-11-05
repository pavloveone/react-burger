import React from "react";

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from '../modules/burger-constructor.module.css';
import { Modal } from "../modal/modal";
import { OrderDetails } from "../order-details/order-details";

export const BurgerConstructor = ({data}) => {

    const notBunArr = [data][0].filter((item) => item.type != 'bun');

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
                text={data[0].name + ' (верх)'}
                price={data[0].price}
                thumbnail={data[0].image}
            />
          <div className={styles.content}>
              {
                  notBunArr.map((item) => (
                      <ConstructorElement
                      key={item._id}
                      text={item.name}
                      price={item.price}
                      thumbnail={item.image}
                      />
                  ))}
            </div>
            <ConstructorElement
                text={data[0].name + ' (низ)'}
                thumbnail={data[0].image}
                isLocked={true}
                price={data[0].price}
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