import React from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './order-info-element.module.css';

export const OrderInfoElement = ({item}) => {
    return (
        <div className={styles.element}>
            <image className={styles.element_image} />
            <span className={styles.element_name}></span>
            <span className={styles.element_count}></span>
            <span className={styles.element_price}></span>
            <CurrencyIcon type="primary" />
        </div>
    );
}