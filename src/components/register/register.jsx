import React from 'react';
import styles from './register.module.css';
import { Link } from 'react-router-dom';

import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';


export const Register = () => {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <h1 className='text text_type_main-medium pb-6'>Регистрация</h1>
                <EmailInput
                    placeholder="E-mail"
                    extraClass="mb-6"
                />
                <EmailInput
                    placeholder="E-mail"
                    extraClass="mb-6"
                />
                <PasswordInput
                    extraClass="mb-6"
                />
                <Button style={{width: '253px', marginBottom: '80px'}} htmlType="button" type="primary" size="medium">
                    Зарегистрироваться
                </Button>
                <p className='text text_type_main-default text_color_inactive pb-4'>
                    Уже зарегистрированы? 
                    <Link to='/login' className={styles.link}>
                        Войти
                    </Link>
                </p>
            </form>
        </div>
    )
}