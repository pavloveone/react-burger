import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './orders-page.module.css';

export const OrdersPage = () => {
    return (
        <div className={styles.container}>
            <p className='text text_type_main-medium pb-10 text_color_inactive'>
                На данный момент, эта страница разрабатывается.
                В дальнейшем, здесь будет отображаться история Ваших заказов.
                Спасибо за понимание!
            </p>
            <NavLink to='/profile' className={`${styles.link} text text_type_main-default`}
            >
                Вернуться в профиль
            </NavLink>
        </div>
    );
}