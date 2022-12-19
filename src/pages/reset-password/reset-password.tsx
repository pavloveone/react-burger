import React from 'react';
import styles from './reset-password.module.css';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../../services/actions/reset-password';

import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

type TLocataionState = {
    from: Location
}

export const ResetPassword = ():JSX.Element => {
    
    const [password, setPassword] = React.useState('');
    const [token, setToken] = React.useState('');
    const location = useLocation<TLocataionState>();
    const { hasUser } = useSelector((state: any) => state.forgotPassword);
    const { success } = useSelector((state: any) => state.resetPassword);

    const dispatch = useDispatch();

    const handleResetPassword = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        // @ts-ignore
        dispatch(resetPassword(password, token));
    }

    return (
        <div className={styles.container}>
            {!hasUser && (
                <Redirect to={location.state?.from || '/'} />
            )} {success ? (
                <p>ok</p>
            ) : (
                <p>error</p>
            )}
            {!success && hasUser && (
                <form className={styles.form} onSubmit={handleResetPassword}>
                <h1 className='text text_type_main-medium pb-6'>Восстановление пароля</h1>
                <PasswordInput
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    extraClass="mb-6"
                    placeholder="Введите новый пароль"
                />
                <Input
                    type={'text'}
                    value={token}
                    onChange={(event) => setToken(event.target.value)}
                    placeholder="Введите код из письма"
                    extraClass="mb-6"
                />
                
                <Button style={{width: '196px', marginBottom: '80px'}} 
                    htmlType="submit" type="primary" size="medium">
                    Сохранить
                </Button>
                <p className='text text_type_main-default text_color_inactive pb-4'>
                    Вспомнили пароль?
                    <Link to='/login' className={styles.link}>
                        Войти
                    </Link>
                </p>
            </form>
            )}
        </div>
    )
}