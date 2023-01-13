import React from 'react';
import styles from '../feed/feed.module.css';
import { FeedCard } from '../../components/feed-card/feed-card';
import { FeedOrders } from '../../components/feed-orders/feed-orders';

export const feedArray = [
    {
        id: 1,
        orderNumber: 1,
        orderName: 'qwer',
        price: 123,
        orderTime: 16,
        ingredients: [
                "60d3b41abdacab0026a733c6",
            ]
    },
    {
        id: 2,
        orderNumber: 2,
        orderName: 'qwerty',
        price: 1231,
        orderTime: 161,
        ingredients: [
                "60d3b41abdacab0026a733c6",
                "60d3b41abdacab0026a733c7",
            ]
    },
    {
        id: 3,
        orderNumber: 12452,
        orderName: 'qweasfasr',
        price: 1212323,
        orderTime: 126,
        ingredients:[
                "60d3b41abdacab0026a733c6",
                "60d3b41abdacab0026a733c7",
                "60d3b41abdacab0026a733c8",
            ]
    },
    {
        id: 4,
        orderNumber: 123123,
        orderName: 'qwasddasder',
        price: 12331323,
        orderTime: 1613123,
        ingredients: [
                "60d3b41abdacab0026a733c6",
                "60d3b41abdacab0026a733c7",
                "60d3b41abdacab0026a733c8",
                "60d3b41abdacab0026a733c9",
            ]
    },
    {
        id: 5,
        orderNumber: 123125,
        orderName: 'qwesadfasr',
        price: 121553,
        orderTime: 161251,
        ingredients: [
                "60d3b41abdacab0026a733c6",
                "60d3b41abdacab0026a733c7",
                "60d3b41abdacab0026a733c8",
                "60d3b41abdacab0026a733c9",
                "60d3b41abdacab0026a733c9",
            ]
    }
]

export const Feed = () => {
    return (
        <>
        <section className={styles.feed_section}>
            <h2 className={`${styles.title} text text_type_main-large`}>Лента заказов</h2>
                <div className={styles.list}>
                    {feedArray.map(item => (
                        <FeedCard item={item} key={item.id} />
                    ))}
                </div>
        </section>
        <div className={styles.stats}>
            <div className={styles.stats_board}>
                <FeedOrders />
            </div>
            <div className={styles.complited_all}>
                <h3 className={`${styles.stats_title} text text_type_main-default`}>Выполнено за все время:</h3>
                <span className='text text_type_digits-large'>28 752</span>
            </div>
            <div className={styles.complited_today}>
                <h3 className={`${styles.stats_title} text text_type_main-default`}>Выполнено за сегодня:</h3>
                <span className='text text_type_digits-large'>286</span>
            </div>
        </div>
        </>

    );
}