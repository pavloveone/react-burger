import React from 'react';
import { feedArray } from '../../pages/feed/feed';
import styles from './feed-orders.module.css';

export const FeedOrders = () => {
    return (
        <>
            <ul className={`${styles.stats_title} text text_type_main-default`}>Готовы
            {feedArray.map(item => (
                <li className={`${styles.stats_order_ready} text text_type_digits-default`} key={item.id}>{item.orderNumber}</li>
            ))}
            </ul>
            <ul className={`${styles.stats_title} text text_type_main-default`}>В работе
            {feedArray.map(item => (
                <li className={`${styles.stats_order} text text_type_digits-default`} key={item.id}>{item.orderNumber}</li>
            ))}
            </ul>
        </>
    );
}