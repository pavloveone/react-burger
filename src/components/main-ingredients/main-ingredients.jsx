import React from 'react';

import { DataContext } from '../../contexts/data-context';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

export const MainIngredients = () => {

    const { data } = React.useContext(DataContext);

    const withOutBunArr = data.filter((item) => item.type !== 'bun');
    return (
            withOutBunArr.map((item) => (
                <ConstructorElement
                    key={item._id}
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image}
                />))
    );
}