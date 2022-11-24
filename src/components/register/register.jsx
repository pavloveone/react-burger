import React from 'react';
import styles from './register.module.css';
import { Link } from 'react-router-dom';

import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';


export const Register = () => {


    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');

    async function createNewLogin() {
        console.log(email);
        console.log(password);
        console.log(name);
        return await fetch('https://norma.nomoreparties.space/api/auth/register'), {
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
                'email': email,
                'password': password,
                'name': name
            })
        }
    }


    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={createNewLogin}>
                <h1 className='text text_type_main-medium pb-6'>Регистрация</h1>
                <EmailInput
                    placeholder="Имя"
                    extraClass="mb-6"
                    onChange={(event) => setName(event.target.value)}
                />
                <EmailInput
                    name={'email'}
                    placeholder="E-mail"
                    extraClass="mb-6"
                    onChange={(event) => setEmail(event.target.value)}
                />
                <PasswordInput
                    name={'password'}
                    extraClass="mb-6"
                    onChange={(event) => setPassword(event.target.value)}
                />
                <Button style={{width: '253px', marginBottom: '80px'}} 
                htmlType="button" type="primary" size="medium" onClick={createNewLogin}>
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