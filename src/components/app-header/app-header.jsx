import React from "react";

import headerLogo from '../../images/logo.svg';

import styles from './app-header.module.css';

import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';


export function AppHeader() {
    return (
        <header className={styles.header}>
            <nav className={`${styles.navigation} p-4`}>
                <a href='/#' className={`${styles.link} p-5`}>
                    <BurgerIcon type="primary" />
                    <p className={`${styles.text} text text_type_main-default text_color p-2`}>Конструктор</p>
                </a>
                <a href='/#' className={styles.link}>
                    <ListIcon type="secondary" />
                    <p className={`${styles.text} text text_type_main-default text_color_inactive p-2`}>Лента заказов</p>
                </a>
                <img alt='logo' src={headerLogo} className={styles.logo} />
                <a href='/#' className={styles.link}>
                    <ProfileIcon type="secondary" />
                    <p className={`${styles.text} text text_type_main-default text_color_inactive p-2`}>Личный кабинет</p>
                </a>
            </nav>
        </header>
    );
}