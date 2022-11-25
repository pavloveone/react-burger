import React from "react";
import { NavLink } from "react-router-dom";

import headerLogo from '../../images/logo.svg';

import styles from './app-header.module.css';

import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';


export function AppHeader() {
    return (
        <header className={styles.header}>
            <nav className={`${styles.navigation} p-4`}>
                <NavLink to='/' className={`${styles.link} p-5`}>
                    <BurgerIcon type="primary" />
                    <p className={`${styles.text} text text_type_main-default text_color p-2`}>Конструктор</p>
                </NavLink>
                <NavLink to='/orders' className={styles.link}>
                    <ListIcon type="secondary" />
                    <p className={`${styles.text} text text_type_main-default text_color_inactive p-2`}>Лента заказов</p>
                </NavLink>
                <img alt='logo' src={headerLogo} className={styles.logo} />
                <NavLink to='/profile' className={styles.link}>
                    <ProfileIcon type="secondary" />
                    <p className={`${styles.text} text text_type_main-default text_color_inactive p-2`}>Личный кабинет</p>
                </NavLink>
            </nav>
        </header>
    );
}