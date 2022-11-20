import styles from '../burger-constructor/burger-constructor.module.css';
import { ConstructorItem } from '../constructor-item/constructor-item'


import { useSelector } from 'react-redux';

export const ConstructorIngredientsContainer = () => {

    const { ingredients } = useSelector((state) => state.constructorIngredients);

    const fetchIngredients = useSelector((state) => state.ingredients.ingredients);

    return (
        <div className={styles.content}>
             {ingredients.map((item, index) => (
                 <ConstructorItem key={item.id} item={item} index={index}  />
                ))}
        </div>
    );
}