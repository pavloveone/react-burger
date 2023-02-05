import React from 'react';
import { useSelector } from '../../services/hooks/hooks';
import { Loading } from '../loading/loading';
import styles from './feed-orders.module.css';

export const FeedOrders = () => {

    const { orders } = useSelector(state => state.feed);

    return (
        <>
            <div className={styles.stats}>
            <h3 className='text text_type_main-medium mb-6'>Готовы:</h3>
            {orders !== null ? (
            <ul className={styles.stats_list}>
            { orders.orders.map((item, index) => (
                item.status === 'done' && (
                    <li key={index} className={`${styles.stats_order_ready} text text_type_digits-default`}>{item.number}</li>
                )))}
            </ul>
            ): (
                <Loading />
            )}
            </div>
            <div>
            <h3 className='text text_type_main-medium mb-6'>В работе:</h3>
            {orders !== null ? (
            <ul className={styles.stats_list}>
            { orders.orders.map((item, index) => (
                item.status !== 'done' && (
                    <li key={index} className={`${styles.stats_order} text text_type_digits-default`}>{item.number}</li>
                )))}
            </ul>
            ) : (
                <Loading />
            )}
            </div>
        </>
    );
}