import React from "react";

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from '../modules/burger-constructor.module.css';

import img_01 from '../../images/bun-02.png';
import img_02 from '../../images/sauce-03.png';
import img_03 from '../../images/meat-02.png';
import img_04 from '../../images/sp 1.png';
import img_05 from '../../images/mineral rings.png';
import img_06 from '../../images/bun-02.png';
import img_07 from '../../images/bun-02.png';
import img_08 from '../../images/bun-02.png';


export const BurgerConstructor = () => {
    return (
      <div className={styles.burger_constructor}>
          <div className={styles.content}>
            <ConstructorElement
                type="top"
                isLocked={true}
                text="Краторная булка N-200i (верх)"
                price={20}
                thumbnail={img_01}
            />
            <ConstructorElement
                text="Соус традиционный галактический"
                price={30}
                thumbnail={img_02}
            />
            <ConstructorElement
                text="Мясо бессмертных моллюсков Protostomia"
                price={300}
                thumbnail={img_03}
            />
            <ConstructorElement
                text="Плоды Фалленианского дерева"
                price={80}
                thumbnail={img_04}
            />
            <ConstructorElement
                text="Хрустящие минеральные кольца"
                price={80}
                thumbnail={img_05}
            />
            <ConstructorElement
                text="Хрустящие минеральные кольца"
                price={80}
                thumbnail={img_05}
            />
            <ConstructorElement
                text="Краторная булка N-200i (низ)"
                price={20}
                thumbnail={img_01}
                type="bottom"
            />
            <ConstructorElement
                isLocked={true}
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail={img_07}
            />
            </div>
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