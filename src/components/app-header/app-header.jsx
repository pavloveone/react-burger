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
                <NavLink to='/' className={`${styles.link} text text_type_main-default pr-5`} activeClassName={styles.active}>
                    <BurgerIcon type="primary" style={{marginRight: '8px'}}/>
                    Конструктор
                </NavLink>
                <NavLink to='/orders-feed' className={`${styles.link} text text_type_main-default`} activeClassName={styles.active}>
                    <ListIcon type="secondary" />
                    Лента заказов
                </NavLink>
                <img alt='logo' src={headerLogo} className={styles.logo} />
                <NavLink to='/profile' className={`${styles.link} text text_type_main-default`}  activeClassName={styles.active}>
                    <ProfileIcon type="secondary" />
                    Личный кабинет
                </NavLink>
            </nav>
        </header>
    );
}