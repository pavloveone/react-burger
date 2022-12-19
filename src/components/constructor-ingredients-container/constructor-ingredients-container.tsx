import styles from '../burger-constructor/burger-constructor.module.css';
import { ConstructorItem } from '../constructor-item/constructor-item'


import { useSelector } from 'react-redux';
import { TIngredient } from '../../utils/types';

export const ConstructorIngredientsContainer = () => {

    const { ingredients } = useSelector((state:any) => state.constructorIngredients);

    return (
        <div className={styles.content}>
             {ingredients.map((item: TIngredient, index: number) => (
                 <ConstructorItem key={item._id} item={item} index={index}  />
                ))}
        </div>
    );
}