import React, { useState } from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './feed-card.module.css';
import { useLocation, Link } from 'react-router-dom';
import { FeedCardImages } from '../feed-card-images/feed-card-images';
import { useSelector } from '../../services/hooks/hooks';

export const FeedCard = ({item}) => {

    const location = useLocation();

    const feedId = item['id'];

    const { ingredients } = useSelector(state => state.ingredients)

    const ingredientId = item.ingredients.map(item => ingredients.find(element => element._id === item));

    // const currentItem  = ingredients.find((element) => element._id === ingredientId ? true : false);

    return(
        <Link
            key={feedId}
            to={{
            pathname: `/feed/${feedId}`,
            state: { background: location },
            }}
            className={styles.link}
        >
            <div className={styles.card}>
                <div className={styles.card_id}>
                    <p className='text text_type_digits-default'>{item.orderNumber}</p>
                    <span className='text text_type_main-default text_color_inactive'>{item.orderTime}</span>
                </div>
                <h3 className={`${styles.card_info} text text_type_main-medium`}>{item.orderName}</h3>
                <div className={styles.ingredients}>
                    <div className={styles.ingredients_images}>
                        {ingredientId.map(item => (
                            <FeedCardImages item={item} key={item.id} />
                        ))}
                    </div>
                    <div className={styles.price}>
                        <span className={`${styles.price_info} text text_type_digits-default pr-2`}>{item.price}</span>
                        <CurrencyIcon type="primary" />
                    </div>
                </div>
            </div>
        </Link>
    );
}