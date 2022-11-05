import React from 'react';

import styles from '../modules/order-details.module.css';

import imageOrder from '../../images/graphics.svg';


export function OrderDetails() {
    return (
        <div className={styles.body}>
            <h2 className={`${styles.title} text text_type_digits-large p-4`}>034536</h2>
            <h3 className={`${styles.subtitle} p-8 text text_type_main-medium`}>Идентификатор заказа</h3>
            <img className={`${styles.image} p-15`} alt='done' src={imageOrder} />
            <p className={`${styles.text} text text_type_main-default p-2`}>Ваш заказ начали готовить</p>
            <span className={`${styles.span} text text_type_main-default text_color_inactive pb-30`}>Дождитесь готовности на орбитальной станции</span>
        </div>
    );
}