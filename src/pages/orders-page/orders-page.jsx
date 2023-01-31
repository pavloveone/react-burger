import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './orders-page.module.css';
import { useDispatch, useSelector } from '../../services/hooks/hooks';
import { connect, disconnect } from '../../services/actions/orders';
import { ordersWsUrl } from '../../utils/api';
import { Loading } from '../../components/loading/loading';

export const OrdersPage = () => {

    const accessToken = localStorage.token;

    const dispatch = useDispatch();

    const { orders } = useSelector((state) => state.orders);

    React.useEffect(() => {
        dispatch(connect(`${ordersWsUrl}?token=${accessToken}`));
        console.log(accessToken)
        
        return () => {
            dispatch(disconnect());
        }
    }, []);
    
    return (
        <div className={styles.container}>
            {orders === null ? (
                <Loading />
            ) : (
                <>
                <p className='text text_type_main-medium pb-10 text_color_inactive'>
                На данный момент, эта страница разрабатывается.
                В дальнейшем, здесь будет отображаться история Ваших заказов.
                Спасибо за понимание!
            </p>
            <NavLink to='/profile' className={`${styles.link} text text_type_main-default`}
            >
                Вернуться в профиль
            </NavLink>
                </>

            )}

        </div>
    );
}