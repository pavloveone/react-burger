import React from 'react';
import styles from './forgot-password.module.css';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { forgotPassword } from '../../services/actions/forgot-password';

import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

export const ForgotPassword = () => {

    const [email, setEmail] = React.useState('');
    const { hasUser } = useSelector((state) => state.forgotPassword);

    const dispatch = useDispatch();

    const resetPassword = (evt, email) => {
        evt.preventDefault();
        dispatch(forgotPassword(email));
  }

    return (
        <div className={styles.container}>
            {hasUser && (
                <Redirect to='/reset-password' />
            )}
            <form className={styles.form} onSubmit={resetPassword}>
                <h1 className='text text_type_main-medium pb-6'>Восстановление пароля</h1>
                <EmailInput
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    name={'email'}
                    placeholder="Укажите e-mail"
                    extraClass="mb-6"
                />
                <Button style={{width: '196px', marginBottom: '80px'}} 
                    htmlType="submit" type="primary" size="medium">
                    Восстановить
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