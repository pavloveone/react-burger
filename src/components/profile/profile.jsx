import React from 'react';
import styles from './profile.module.css';
import { NavLink } from 'react-router-dom';

import { Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';

export const Profile = () => {
    return(
        <div className={styles.container}>
            <nav className={styles.links}>
                <NavLink to='/profile' 
                    className={`${styles.link} text text_type_main-medium`}
                    activeClassName={styles.link_active}
                    >
                    Профиль
                </NavLink>
                <NavLink to='/orders' 
                    className={`${styles.link} text text_type_main-medium`}
                    activeClassName={styles.link_active}
                    >
                    История заказов
                </NavLink>
                <NavLink to='/main' 
                    className={`${styles.link} text text_type_main-medium`}
                    activeClassName={styles.link_active}
                    >
                    Выход
                </NavLink>
                <p className={`${styles.description} text text_type_main-default text_color_inactive pt-20`}>В этом разделе вы можете<br /> изменить свои персональные данные</p>
            </nav>
            <form className={styles.form}>
                <Input placeholder={'Имя'} icon={'EditIcon'} />
                <Input placeholder={'Логин'} icon={'EditIcon'} />
                <PasswordInput />
            </form>
        </div>
    );
}