import React from 'react';

import { OrderInfoElement } from '../order-info-element/order-info-element';
import { fetchOrderNumber } from '../../services/actions/order-details';
import styles from './order-info.module.css';
import { useDispatch, useSelector } from '../../services/hooks/hooks';
import { useParams } from 'react-router';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { TIngredient } from '../../utils/types';

export const OrderInfo = (): JSX.Element => {

    interface IOrderInfoParams{
        feedNumber: string;
    }

    const { orders } = useSelector((state) => state.feed);
    const { ingredients } = useSelector(state => state.ingredients);

    const { feedNumber } = useParams<IOrderInfoParams>();
    const dispatch = useDispatch();

    const currentOrder = orders?.orders.find(order => {
        if(order.number == feedNumber) {
            return order
        } else {
            dispatch(fetchOrderNumber(feedNumber));
        }
    })

    const currentItem = currentOrder?.ingredients
    .map(item => ingredients.find(element => element._id === item))
    .filter((item):item is TIngredient => !!item);

    const currentPrice = () => {
        const sum = currentItem;
        return sum?.reduce((acc, curr) => curr.type === 'bun' ? acc  + curr.price * 2 : acc + curr.price, 0);
    };

    return (
        <div className={styles.container}>
            <span className={`${styles.order_number} text text_type_digits-default pt-10 pb-5`}>{`#${currentOrder?.number}`}</span>
            <h3 className={`${styles.order_name} text text_type_main-default pb-2`}>{currentOrder?.name}</h3>
            {currentOrder?.status === 'done' ? (
                <h4 className={`${styles.order_status_ready} text text_type_main-small pb-10`}>Выполнен</h4>
            ): (
                <h4 className={`${styles.order_status} text text_type_main-small`}>Готовится</h4>

            )}
            <h4 className={`${styles.title} text text_type_main-default pb-6`}>Состав: </h4>
            <div className={styles.order_consistent}>
                {currentOrder?.ingredients.map((item, index) => (
                    <OrderInfoElement item={item} key={index} />
                ))}
            </div>
            <div className={styles.order_info}>
                <FormattedDate className='text text_type_main-default text_color_inactive' date={currentOrder ? new Date(currentOrder.createdAt): new Date() } />
                <div className={styles.price}>
                    <span className='text text_type_digits-default pr-2'>{currentPrice()}</span>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </div>
    );
}