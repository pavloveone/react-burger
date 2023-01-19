import React from 'react';
import { useParams } from 'react-router-dom';
import { OrderInfoElement } from '../order-info-element/order-info-element';
import styles from './order-info.module.css';
import { feedArray } from '../../pages/feed/feed';
import { useDispatch, useSelector } from '../../services/hooks/hooks';
import { fetchOrderNumber } from '../../services/actions/order-details';
import { wsUrl } from '../../utils/api';
import { wsConnectionClosed, wsConnectionSuccess } from '../../services/actions/feed';

export const OrderInfo = () => {

    // const { ingredients } = useSelector(state => state.ingredients);
    const { orderNumber } = useSelector((state) => state.orderDetails);
    const dispatch = useDispatch();
    // const { feedNumber } = useParams();
    // const feedIngredients = feedArray.map(item => ingredients.find(element => element._id === item))

    React.useEffect(() => {
        dispatch(fetchOrderNumber(orderNumber))
        console.log(orderNumber)
    }, []);
    // const ingredientId = item.ingredients.map(item => ingredients.find(element => element._id === item));
    
    // const currentItem = feedIngredients.find(element => element.id === feedId ? true : false);

    return (
        <div className={styles.container}>
            <span className={styles.order_number}></span>
            <h3 className={styles.order_name}></h3>
            <h4 className={styles.order_status}></h4>
            <div className={styles.order_consistent}>
                <h4 className={styles.title}>Состав: </h4>
                {feedArray.map(item => (
                    <OrderInfoElement key={item.id} />
                ))}
            </div>
        </div>
    );
}