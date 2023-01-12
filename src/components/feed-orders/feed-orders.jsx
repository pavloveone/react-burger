import React from 'react';
import styles from './feed-orders.module.css';

export const FeedOrders = () => {
    return (
        <>
            <ul className={`${styles.stats_title} text text_type_main-default`}>Готовы
                <li className={`${styles.stats_order_ready} text text_type_digits-default`}>123</li>
            </ul>
            <ul className={`${styles.stats_title} text text_type_main-default`}>В работе
                <li className={`${styles.stats_order} text text_type_digits-default`}>321</li>
            </ul>
        </>
    );
}