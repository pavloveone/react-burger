import React, { useState } from 'react';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './feed-card.module.css';
import { useLocation, Link } from 'react-router-dom';
import { FeedCardImages } from '../feed-card-images/feed-card-images';
import { useSelector } from '../../services/hooks/hooks';
import { TIngredient, TOrderInfo } from '../../utils/types';


export const FeedCard = ({item: orderInfo}: {item: TOrderInfo}): JSX.Element => {

    const location = useLocation();

    const feedNumber = orderInfo.number;

    const { ingredients } = useSelector(state => state.ingredients)

    const ingredientInOrder = orderInfo.ingredients
    .map(orderIngredientsString => ingredients.find(element => element._id === orderIngredientsString))
    .filter((item):item is TIngredient => !!item);

    const currentPrice = () => {
        const sum = [...ingredientInOrder];
        return sum.reduce((acc, curr) => curr?.type === 'bun' ? acc  + curr.price * 2 : acc + curr.price, 0);
    };

    return(
        <Link
        key={feedNumber}
        to={{
        pathname: `/feed/${feedNumber}`,
        state: { background: location },
        }}
        className={styles.link}
    >
        <div className={styles.card}>
            <div className={styles.card_id}>
                <p className='text text_type_digits-default'>{`#${orderInfo.number}`}</p>
                <FormattedDate className='text text_type_main-default text_color_inactive' date={new Date(orderInfo.createdAt)} />
            </div>
            {orderInfo.status === 'done' ? (
            <h4 className={`${styles.status_ready} text text_type_main-small`}>Выполнен</h4>
        ): (
            <h4 className={`${styles.status} text text_type_main-small`}>Готовится</h4>

        )}
            <h3 className={`${styles.card_info} text text_type_main-medium`}>{orderInfo.name}</h3>
            <div className={styles.ingredients}>
                <div className={styles.ingredients_images}>
                    {ingredientInOrder.map((item, index) => (
                        <FeedCardImages item={item} key={index} />
                    ))}
                </div>
                <div className={styles.price}>
                    <span className={`${styles.price_info} text text_type_digits-default pr-2`}>{currentPrice()}</span>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </div>
    </Link>
    );
}