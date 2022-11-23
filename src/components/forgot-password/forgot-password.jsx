import React from 'react';
import styles from './forgot-password.module.css';
import { Link } from 'react-router-dom';

import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';


export const ForgotPassword = () => {

    async function resetPassword() {
        return await fetch('https://norma.nomoreparties.space/api/password-reset'), {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': "application/json;charset=utf-8"
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({
                'email': ''
            })
        }
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={resetPassword}>
                <h1 className='text text_type_main-medium pb-6'>Восстановление пароля</h1>
                <EmailInput
                    name={'email'}
                    placeholder="Укажите e-mail"
                    extraClass="mb-6"
                />
                <Button style={{width: '196px', marginBottom: '80px'}} 
                    htmlType="button" type="primary" size="medium" onClick={resetPassword}>
                    Восстановить
                </Button>
                <p className='text text_type_main-default text_color_inactive pb-4'>
                    Вспомнили пароль
                    <Link to='/login' className={styles.link}>
                        Войти
                    </Link>
                </p>
            </form>
        </div>
    )
}