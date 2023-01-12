import styles from '../burger-constructor/burger-constructor.module.css';
import { ConstructorItem } from '../constructor-item/constructor-item'


import { useSelector } from '../../services/hooks/hooks'
import { TIngredient } from '../../utils/types';

export const ConstructorIngredientsContainer = ():JSX.Element => {

    const { ingredients } = useSelector((state) => state.constructorIngredients);

    return (
        <div className={styles.content}>
             {ingredients.map((item: TIngredient, index: number) => (
                 <ConstructorItem key={item.id} item={item} index={index}  />
                ))}
        </div>
    );
}