import React from 'react';
import styles from './login.module.css';
import { Link } from 'react-router-dom';

import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';


export const Login = () => {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <h1 className='text text_type_main-medium pb-6'>Вход</h1>
                <EmailInput
                    placeholder="E-mail"
                    extraClass="mb-6"
                />
                <PasswordInput
                    extraClass="mb-6"
                />
                <Button style={{width: '128px', marginBottom: '80px'}} htmlType="button" type="primary" size="medium">
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