import React from 'react';
import  propTypes  from 'prop-types';

import { ingredientTypes } from '../../utils/variables';

import styles from './ingredient-details.module.css';

export function IngredientDetails({ingredient}) {
    return (
        <div className={styles.body}>
            <img className={styles.image} alt={`изображение ${ingredient.name}`} src={ingredient.image}/>
            <span className={`${styles.title} text text_type_main-medium`}>{ingredient.name}</span>
            <div className={`${styles.container} pb-15`}>
                <div className={`${styles.info} pl-5`}>
                    <h4 className={`${styles.title} text text_type_main-default text_color_inactive`}>Калории,ккал</h4>
                    <p>{ingredient.calories}</p>
                </div>
                <div className={`${styles.info} pl-5`}>
                    <h4 className={`${styles.title} text text_type_main-default text_color_inactive`}>Белки,г</h4>
                    <p>{ingredient.proteins}</p>
                </div>
                <div className={`${styles.info} pl-5`}>
                    <h4 className={`${styles.title} text text_type_main-default text_color_inactive`}>Жиры,г</h4>
                    <p>{ingredient.fat}</p>
                </div>
                <div className={`${styles.info} pl-5`}>
                    <h4 className={`${styles.title} text text_type_main-default text_color_inactive`}>Углеводы,г</h4>
                    <p>{ingredient.carbohydrates}</p>
                </div>
            </div>
        </div>)
}

IngredientDetails.ReactPropTypes = {
    ingredient: ingredientTypes.isRequired
};