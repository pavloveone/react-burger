import styles from '../burger-constructor/burger-constructor.module.css';

import { useSelector } from 'react-redux';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

export const ConstructorIngredientsContainer = () => {

    const { ingredients } = useSelector((state) => state.ingredients);

    const withOutBunArr = ingredients.filter((item) => item.type !== 'bun');
    return (
        <div className={styles.content}>
             {withOutBunArr.map((item) => (
                <ConstructorElement
                    key={item._id}
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image}
                />))}
        </div>
    );
}