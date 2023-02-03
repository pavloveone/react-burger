import React from 'react';
import styles from '../feed/feed.module.css';
import { FeedCard } from '../../components/feed-card/feed-card';
import { FeedOrders } from '../../components/feed-orders/feed-orders';
import { useDispatch, useSelector } from '../../services/hooks/hooks';
import { connect, disconnect } from '../../services/actions/feed';
import { wsUrl } from '../../utils/api';
import { Loading } from '../../components/loading/loading';

export const Feed = (): JSX.Element => {

    const { orders } = useSelector((state) => state.feed);

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(connect(wsUrl));
        
        return () => {
            dispatch(disconnect());
        }
    }, []);
    return (
        <>
        {orders === null ? (
            <Loading />
        ): (
            <>
            <section className={styles.feed_section}>
            <h2 className={`${styles.title} text text_type_main-large pt-10 pb-5`}>Лента заказов</h2>
                <div className={styles.list}>
                    {orders.orders.map((item, index) => (
                        <FeedCard item={item} key={index} />
                    ))}
                </div>
            </section>
        <div className={styles.stats}>
            <div className={styles.stats_board}>
                <FeedOrders />
            </div>
            <div className={styles.complited_all}>
                <h3 className={`${styles.stats_title} text text_type_main-medium`}>Выполнено за все время:</h3>
                <span className='text text_type_digits-large'>{orders.total}</span>
            </div>
            <div className={styles.complited_today}>
                <h3 className={`${styles.stats_title} text text_type_main-medium`}>Выполнено за сегодня:</h3>
                <span className='text text_type_digits-large'>{orders.totalToday}</span>
            </div>
        </div>
            </>
        )}
        </>
    );
}