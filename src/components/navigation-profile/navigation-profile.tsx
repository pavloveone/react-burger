import React, { SyntheticEvent } from 'react';
import styles from './navigation-profile.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../../services/actions/login';

export type TNavigationProfileProps = {
    description: string;
}


export const NavigationProfile = ({description}: TNavigationProfileProps): JSX.Element => {
    const dispatch = useDispatch();

    const exit = (e: SyntheticEvent) => {
        e.preventDefault();
        logOut(dispatch);
    }

    return (
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
        <a 
            className={`${styles.link} text text_type_main-medium`}
            onClick={exit}
            >
            Выход
        </a>
        <p className={`${styles.description} text text_type_main-default text_color_inactive pt-20`}>В этом разделе вы можете<br />{description}</p>
    </nav>
    );
}