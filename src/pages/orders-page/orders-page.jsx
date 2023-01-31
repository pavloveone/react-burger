import React from 'react';
import styles from './orders-page.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from '../../services/hooks/hooks';
import { connect, disconnect } from '../../services/actions/orders';
import { ordersWsUrl } from '../../utils/api';
import { Loading } from '../../components/loading/loading';
import { getCookie } from '../../utils/cookies';
import { FeedCard } from '../../components/feed-card/feed-card';
import { NavigationProfile } from '../../components/navigation-profile/navigation-profile';

export const OrdersPage = () => {

    const accessToken = getCookie('token');
    const token = accessToken.split(' ')[1];

    const dispatch = useDispatch();

    const { orders } = useSelector((state) => state.orders);

    React.useEffect(() => {
        dispatch(connect(`${ordersWsUrl}?token=${token}`));
        
        return () => {
            dispatch(disconnect());
        }
    }, []);
    
    return (
        <div className={styles.container}>
            <NavigationProfile description={' посмотреть свою историю заказов'} />
            {orders === null ? (
                <Loading />
            ) : (
                <div>
                    {console.log(orders)}
                    {orders.orders.length > 0 ? (
                        <FeedCard />
                    ) : (
                        <>
                        <p className='text text_color_inactive text_type_main-medium mb-10'>История заказов пока что отсутствует...<br/>Исправим?</p>
                        <NavLink to='/' 
                        className={`${styles.link} text text_type_main-medium`}
                        exact
                        >
                        Сделать заказ
                        </NavLink>
                        </>

                    )}
                </div>
            )}

        </div>
    );
}