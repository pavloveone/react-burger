import React from "react";

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from '../modules/burger-constructor.module.css';

import { data } from '../../utils/data';


export const BurgerConstructor = ({data}) => {
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
            <ConstructorElement
                text={data[5].name}
                price={data[5].price}
                thumbnail={data[5].image}
            />
            <ConstructorElement
                text={data[4].name}
                price={data[4].price}
                thumbnail={data[4].image}
            />
            <ConstructorElement
                text={data[7].name}
                price={data[7].price}
                thumbnail={data[7].image}
            />
            <ConstructorElement
                text={data[8].name}
                price={data[8].price}
                thumbnail={data[8].image}
            />
            <ConstructorElement
                text={data[8].name}
                price={data[8].price}
                thumbnail={data[8].image}
            />
            <ConstructorElement
                text={data[1].name}
                price={data[1].price}
                thumbnail={data[1].image}
            />
            <ConstructorElement
                text={data[2].name}
                price={data[2].price}
                thumbnail={data[2].image}
            />
            <ConstructorElement
                text={data[6].name}
                price={data[6].price}
                thumbnail={data[6].image}
            />
            <ConstructorElement
                text={data[9].name}
                price={data[9].price}
                thumbnail={data[9].image}
            />
            <ConstructorElement
                text={data[10].name}
                price={data[10].price}
                thumbnail={data[10].image}
            />
            <ConstructorElement
                text={data[11].name}
                price={data[11].price}
                thumbnail={data[11].image}
            />
            <ConstructorElement
                text={data[12].name}
                price={data[12].price}
                thumbnail={data[12].image}
            />
            <ConstructorElement
                text={data[13].name}
                price={data[13].price}
                thumbnail={data[13].image}
            />
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
            <Button type="primary" size="medium">Нажми на меня</Button>
        </div>
      </div>
    )
  }