import React from 'react';
import { NavLink } from 'react-router-dom';

import NotFoundImage from '../../images/not-found.png';

export const NotFound404 = (): JSX.Element => {
    return (
        <div>
            <div>
                <img alt='страница не найдена' src={NotFoundImage} />
                <h2>К сожалению, данной страницы пока что не существует.</h2>
                <NavLink to='/'>
                    На главную
                </NavLink>
            </div>
        </div>
    );
}