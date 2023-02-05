import React from 'react';
import { useSelector } from '../../services/hooks/hooks'
import { useParams } from 'react-router-dom';
import { TIngredient } from '../../utils/types';

import styles from './ingredient-details.module.css';

export function IngredientDetails():JSX.Element {
    
    const { ingredients } = useSelector((state) => state.ingredients);

    interface IIngredientDetailsParams{
        ingredientId: string;
    }

    const { ingredientId } = useParams<IIngredientDetailsParams>();

    const currentItem  = ingredients.find((element: TIngredient) => element._id === ingredientId ? true : false);

    return (
        <div className={styles.body}>
            <img className={styles.image} alt={`изображение ${currentItem?.name}`} src={currentItem?.image}/>
            <span className={`${styles.title} text text_type_main-medium`}>{currentItem?.name}</span>
            <div className={`${styles.container} pb-15`}>
                <div className={`${styles.info} pl-5`}>
                    <h4 className={`${styles.title} text text_type_main-default text_color_inactive`}>Калории,ккал</h4>
                    <p className='text text_type_main-default text_color_inactive'>{currentItem?.calories}</p>
                </div>
                <div className={`${styles.info} pl-5`}>
                    <h4 className={`${styles.title} text text_type_main-default text_color_inactive`}>Белки,г</h4>
                    <p className='text text_type_main-default text_color_inactive'>{currentItem?.proteins}</p>
                </div>
                <div className={`${styles.info} pl-5`}>
                    <h4 className={`${styles.title} text text_type_main-default text_color_inactive`}>Жиры,г</h4>
                    <p className='text text_type_main-default text_color_inactive'>{currentItem?.fat}</p>
                </div>
                <div className={`${styles.info} pl-5`}>
                    <h4 className={`${styles.title} text text_type_main-default text_color_inactive`}>Углеводы,г</h4>
                    <p className='text text_type_main-default text_color_inactive'>{currentItem?.carbohydrates}</p>
                </div>
            </div>
        </div>
        )
}
