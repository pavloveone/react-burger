import React, { SyntheticEvent } from 'react';
import styles from './profile.module.css';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getUser, updateUser } from '../../services/actions/profile';


import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavigationProfile } from '../../components/navigation-profile/navigation-profile';

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
                <NavigationProfile description={' изменить свои персональные данные'} />
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