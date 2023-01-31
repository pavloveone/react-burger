import React from "react";
import { NavLink } from "react-router-dom";

import headerLogo from '../../images/logo.svg';

import styles from './app-header.module.css';
import { useRouteMatch } from "react-router-dom";

import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';


export function AppHeader() {

    const isConstructor = !!useRouteMatch({ path: '/', exact: true});
    const isFeed = !!useRouteMatch({ path: '/feed', exact: true });
    const isProfile = !!useRouteMatch({ path: '/profile', exact: true });

    return (
        <header className={styles.header}>
            <nav className={`${styles.navigation} p-4`}>
                <NavLink to='/' 
                className={`${styles.link} text text_type_main-default pr-5`} 
                activeClassName={styles.active} 
                exact>
                    <BurgerIcon type={isConstructor ? 'primary' : 'secondary'}/>
                    Конструктор
                </NavLink>
                <NavLink to='/feed' 
                className={`${styles.link} text text_type_main-default`} 
                activeClassName={styles.active} 
                exact>
                    <ListIcon type={isFeed ? 'primary' : 'secondary'} />
                    Лента заказов
                </NavLink>
                <img alt='logo' src={headerLogo} className={styles.logo} />
                <NavLink to='/profile' 
                className={`${styles.link} text text_type_main-default`}  
                activeClassName={styles.active}
                exact>
                    <ProfileIcon type={isProfile ? 'primary' : 'secondary'} />
                    Личный кабинет
                </NavLink>
            </nav>
        </header>
    );
}