import React from 'react';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from '../modules/burger-ingredients.module.css';



export function BurgerIngredientsElement({ image, price, name, onOpen }) {

    return(
        <div className={styles.card_container}>
                <div className={styles.card}>
                    <Counter count={1} size="default" />
                    <img src={image} className={`${styles.card_image} p-4`} onClick={onOpen}/>
                    <div className={`${styles.price_container} p-1`}>
                        <p className={`${styles.price_text} text text_type_digits-default`}>{price}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <p className={`${styles.card_caption} text text_type_main-default`}>{name}</p>
                </div>
            </div>
    );
}