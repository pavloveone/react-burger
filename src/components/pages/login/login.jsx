import React, { useEffect } from 'react';
import styles from './login.module.css';
import { Link, Redirect, useLocation } from 'react-router-dom';

import { authorization } from '../../../services/actions/login';

import { EmailInput, Button, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';


export const Login = () => {

    const [ email, setEmail ] = React.useState('');
    const [ password, setPassword ] = React.useState('');
    const location = useLocation();

    const { isAuth } = useSelector((state) => state.login)

    const dispatch = useDispatch();

    const logIn = (e) => {
        e.preventDefault();
        dispatch(authorization(email, password));
    }

    return (
            <div className={styles.container}>
                {isAuth && (
                    <Redirect to={location.state?.from || '/'} />
                )}
            <form className={styles.form} onSubmit={logIn}>
                <h1 className='text text_type_main-medium pb-6'>Вход</h1>
                <EmailInput
                    value={email}
                    placeholder="E-mail"
                    extraClass="mb-6"
                    onChange={e => setEmail(e.target.value)}
                />
                <PasswordInput
                    value={password}
                    extraClass="mb-6"
                    onChange={e => setPassword(e.target.value)}
                />
                <Button style={{width: '128px', marginBottom: '80px'}} htmlType="submit" type="primary" size="medium">
                    Войти
                </Button>
                <p className='text text_type_main-default text_color_inactive pb-4'>
                    Вы - новый пользователь? 
                    <Link to='/register' className={styles.link}>
                        Зарегистрироваться
                    </Link>
                </p>
                <p className='text text_type_main-default text_color_inactive'>
                    Забыли пароль? 
                    <Link to='/forgot-password' className={styles.link}>
                        Восстановить пароль
                    </Link>
                </p>
            </form>
        </div>
    )
}