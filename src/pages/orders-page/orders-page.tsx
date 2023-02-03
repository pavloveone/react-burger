import React from 'react';
import styles from './orders-page.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from '../../services/hooks/hooks';
import { connect, disconnect } from '../../services/actions/orders';
import { ordersWsUrl } from '../../utils/api';
import { Loading } from '../../components/loading/loading';
import { getCookie } from '../../utils/cookies';
import { OrderCard } from '../../components/order-card/order-card';
import { NavigationProfile } from '../../components/navigation-profile/navigation-profile';

export const OrdersPage = () => {

    const accessToken = getCookie('token');
    const token = accessToken?.split(' ')[1];

    const dispatch = useDispatch();

    const { userOrders } = useSelector((state) => state.orders);

    React.useEffect(() => {
        dispatch(connect(`${ordersWsUrl}?token=${token}`));
        return () => {
            dispatch(disconnect());
        }
    }, []);
    
    return (
        <div className={styles.container}>
            <NavigationProfile description={' посмотреть свою историю заказов'} />
            {userOrders === null ?(
                <Loading />
            ): (
                <div className={styles.content}>
                {userOrders.orders.map((order, index) => (
                    <OrderCard item={order} key={index} />
                ))}
                </div>
            )}
        </div>
    );
}