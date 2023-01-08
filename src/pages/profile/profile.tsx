import React, { SyntheticEvent } from 'react';
import styles from './profile.module.css';
import { NavLink, Redirect, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getUser, updateUser } from '../../services/actions/profile';

import { logOut } from '../../services/actions/login';

import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

export const Profile = () => {

    const dispatch = useDispatch();

    const { isAuth } = useSelector((state: any) => state.login);
    const { userProfile, isLoading } = useSelector((state: any) => state.profile);

    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    React.useEffect(() => {
        // @ts-ignore
        dispatch(getUser())
    }, [])

    React.useEffect(() => {
        if (userProfile.success) {
            setEmail(userProfile.user.email);
            setUsername(userProfile.user.name);
        }
    }, [isLoading])


    const exit = (e: SyntheticEvent) => {
        e.preventDefault();
        logOut(dispatch);
    }

    const updateForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // @ts-ignore
        dispatch(updateUser(email, username));
    }

    const cancelUpdate = (e: SyntheticEvent) => {
        e.preventDefault();
        setUsername(userProfile.user.name);
        setEmail(userProfile.user.email);
    }

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
                <a 
                    className={`${styles.link} text text_type_main-medium`}
                    onClick={exit}
                    >
                    Выход
                </a>
                <p className={`${styles.description} text text_type_main-default text_color_inactive pt-20`}>В этом разделе вы можете<br /> изменить свои персональные данные</p>
            </nav>
            <form className={styles.form} onSubmit={updateForm}>
                <Input placeholder={'Имя'} icon={'EditIcon'} value={username} onChange={(e) => setUsername(e.target.value)} />
                <Input placeholder={'Логин'} icon={'EditIcon'} value={email} onChange={(e) => setEmail(e.target.value)} />
                <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)}  />
                <Button
                    disabled={(username.length > 0 && email.length > 0) ? false : true} 
                    htmlType="submit" type="primary" size="medium">
                        Сохранить
                </Button>
                <Button style={{ marginBottom: '80px'}}
                    disabled={(username.length > 0 || email.length > 0) ? false : true} 
                    onClick={cancelUpdate}
                    htmlType="button" type="primary" size="medium">
                        Отменить
                </Button>
            </form>
            {!isAuth && (
                <Redirect to='/login' />
            )}
        </div>
    );
}