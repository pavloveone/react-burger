import React from 'react';
import { useParams } from 'react-router-dom';
import { OrderInfoElement } from '../order-info-element/order-info-element';
import styles from './order-info.module.css';
import { feedArray } from '../../pages/feed/feed';

export const OrderInfo = () => {
    const { feedId } = useParams();
    const currentItem = feedArray.find(element => element.id === feedId ? true : false);

    return (
        <div className={styles.container}>
            <span className={styles.order_number}></span>
            <h3 className={styles.order_name}></h3>
            <h4 className={styles.order_status}></h4>
            <div className={styles.order_consistent}>
                <h4 className={styles.title}>Состав: </h4>
                {feedArray.map(item => (
                <OrderInfoElement item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
}