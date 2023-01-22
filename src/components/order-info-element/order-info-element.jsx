import React from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './order-info-element.module.css';
import { useSelector } from '../../services/hooks/hooks';

export const OrderInfoElement = ({item}) => {
    
    const { ingredients } = useSelector(state => state.ingredients);
    const currentItem = ingredients.find(element => element._id === item);

    return (
        <div className={styles.element}>
            {console.log(currentItem)}
            <img className={styles.element_image} src={currentItem.image} />
            <span className={styles.element_name}>{currentItem.name}</span>
            <span className={styles.element_count}></span>
            <span className={styles.element_price}>{currentItem.price}</span>
            <CurrencyIcon type="primary" />
        </div>
    );
}