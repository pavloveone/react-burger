import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import styles from './ingredient-details.module.css';

export function IngredientDetails() {
    
    // const { currentItem } = useSelector((state) => state.ingredientsDetails);
    const { ingredients } = useSelector((state) => state.ingredients);

    const { ingredientId } = useParams();

    const currentItem = ingredients.find((element) => element._id === ingredientId ? true : false);

    return (
        (<div className={styles.body}>
            <img className={styles.image} alt={`изображение ${currentItem.name}`} src={currentItem.image}/>
            <span className={`${styles.title} text text_type_main-medium`}>{currentItem.name}</span>
            <div className={`${styles.container} pb-15`}>
                <div className={`${styles.info} pl-5`}>
                    <h4 className={`${styles.title} text text_type_main-default text_color_inactive`}>Калории,ккал</h4>
                    <p>{currentItem.calories}</p>
                </div>
                <div className={`${styles.info} pl-5`}>
                    <h4 className={`${styles.title} text text_type_main-default text_color_inactive`}>Белки,г</h4>
                    <p>{currentItem.proteins}</p>
                </div>
                <div className={`${styles.info} pl-5`}>
                    <h4 className={`${styles.title} text text_type_main-default text_color_inactive`}>Жиры,г</h4>
                    <p>{currentItem.fat}</p>
                </div>
                <div className={`${styles.info} pl-5`}>
                    <h4 className={`${styles.title} text text_type_main-default text_color_inactive`}>Углеводы,г</h4>
                    <p>{currentItem.carbohydrates}</p>
                </div>
            </div>
        </div>)
        )
}
