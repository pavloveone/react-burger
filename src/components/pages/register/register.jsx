import React from 'react';
import styles from './register.module.css';
import { Link, useLocation, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registration } from '../../../services/actions/register';

import { EmailInput, Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';


export const Register = () => {

    const [email, setEmail] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const { isAuth } = useSelector((state) => state.login)

    const inputRef = React.useRef(null);

    const dispatch = useDispatch();
    const location = useLocation();

    const createNewLogin = (evt) => {
    evt.preventDefault();
    dispatch(registration())
  }


    return (
        <div className={styles.container}>
            {isAuth && (
                    <Redirect to={location.state?.from || '/'} />
                )}
            <form className={styles.form} onSubmit={createNewLogin}>
                <h1 className='text text_type_main-medium pb-6'>Регистрация</h1>
                <Input
                    type={'text'}
                    placeholder="Имя"
                    extraClass="mb-6"
                    ref={inputRef}
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <EmailInput
                    type={'email'}
                    placeholder="E-mail"
                    extraClass="mb-6"
                    ref={inputRef}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <PasswordInput
                    type={'password'}
                    extraClass="mb-6"
                    ref={inputRef}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button style={{width: '253px', marginBottom: '80px'}} 
                htmlType="submit" type="primary" size="medium">
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