import React from 'react';
import styles from './reset-password.module.css';
import { Link } from 'react-router-dom';

import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

export const ResetPassword = () => {

const [password, setPassword] = React.useState('');
const [token, setToken] = React.useState('');


    async function createNewPassword() {
        console.log(password);
        console.log(token);
        return await fetch('https://norma.nomoreparties.space/api/password-reset/reset'), {
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
                'password': password,
                'token': token
            })
        }
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={createNewPassword}>
                <h1 className='text text_type_main-medium pb-6'>Восстановление пароля</h1>
                <PasswordInput
                    name={'password'}
                    onChange={(event) => setPassword(event.target.value)}
                    extraClass="mb-6"
                    placeholder="Введите новый пароль"
                />
                <EmailInput
                    name={'text'}
                    onChange={(event) => setToken(event.target.value)}
                    placeholder="Введите код из письма"
                    extraClass="mb-6"
                />
                
                <Button style={{width: '196px', marginBottom: '80px'}} 
                    htmlType="button" type="primary" size="medium" onClick={createNewPassword}>
                    Сохранить
                </Button>
                <p className='text text_type_main-default text_color_inactive pb-4'>
                    Вспомнили пароль?
                    <Link to='/login' className={styles.link}>
                        Войти
                    </Link>
                </p>
            </form>
        </div>
    )
}