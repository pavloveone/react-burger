import React from 'react';

import { OrderInfoElement } from '../order-info-element/order-info-element';
import styles from './order-info.module.css';
import { useSelector } from '../../services/hooks/hooks';
import { useParams } from 'react-router';

export const OrderInfo = () => {


    const { orders } = useSelector((state) => state.feed);

    const { feedNumber } = useParams();

    const currentOrder = orders.orders.find(order => {
        if(order.number === 37575) {
            return order
        }
    });

    React.useEffect(() => {
        console.log(orders.orders.find(order => {
            if(order.number === 37575) {
                return order
            }
        }))
    }, [])

    // const feedIngredients = orders.orders.map(item => ingredients.find(element => element._id === item.map(item => item)));

    // const ingredientId = item.ingredients.map(item => ingredients.find(element => element._id === item));
    
    // const currentItem = feedIngredients.find(element => element.id === feedId ? true : false);

    return (
        <div className={styles.container}>
            {console.log(currentOrder)}
            <span className={styles.order_number}>{currentOrder.number}</span>
            <h3 className={styles.order_name}>{currentOrder.name}</h3>
            <h4 className={styles.order_status}>{currentOrder.status}</h4>
            <div className={styles.order_consistent}>
                <h4 className={styles.title}>Состав: </h4>
                {currentOrder.ingredients.map(item => (
                    <OrderInfoElement item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
}