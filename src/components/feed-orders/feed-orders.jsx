import React from 'react';
import { useSelector } from '../../services/hooks/hooks';
import styles from './feed-orders.module.css';

export const FeedOrders = () => {

    const { orders } = useSelector(state => state.feed);

    return (
        <>
            <ul className={`${styles.stats_title} text text_type_main-default`}>Готовы
            { orders.orders.map(item => (
                item.status === 'done' && (
                    <li className={`${styles.stats_order_ready} text text_type_digits-default`}>{item.number}</li>
                )))}
            </ul>
            <ul className={`${styles.stats_title} text text_type_main-default`}>В работе
            { orders.orders.map(item => (
                item.status !== 'done' && (
                    <li className={`${styles.stats_order} text text_type_digits-default`}>{item.number}</li>
                )))}
            </ul>
        </>
    );
}