import React from 'react';
import styles from './profile.module.css';
import { NavLink } from 'react-router-dom';

import { Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';

const inActiveLink = `${styles.link} text text_type_main-medium text_color_inactive`;

export const Profile = () => {
    return(
        <div className={styles.container}>
            <nav className={styles.links}>
                <NavLink to='/profile' 
                    className={inActiveLink}>
                    Профиль
                </NavLink>
                <NavLink to='/orders' 
                    className={inActiveLink}>
                    История заказов
                </NavLink>
                <NavLink to='/' 
                    className={inActiveLink}>
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