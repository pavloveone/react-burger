import React, { useEffect } from "react";
import  propTypes  from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-ingredients.module.css';

import { Modal } from '../modal/modal';
import {BurgerIngredientsElement} from '../burger-ingredients-element/burger-ingredients-element';
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { ingredientTypes } from '../../utils/variables';

import { showDetails, closeDetails } from '../../services/ingredients-details-slice';

export function BurgerIngredients() {

    const { ingredients } = useSelector((state) => state.ingredients);
    const  { visibleModal }  = useSelector((state) => state.ingredientsDetails);


    const bunArr = React.useMemo(() => 
    ingredients.filter((item) => 
            item.type === 'bun')
        );
    const sauceArr = React.useMemo(() => 
    ingredients.filter((item) => 
            item.type === 'sauce')
        );
    const mainArr = React.useMemo(() => 
    ingredients.filter((item) => 
            item.type === 'main')
        );

    const handleShowDetails = (item) => {
        dispatch(showDetails(item));
    };

    const dispatch = useDispatch();

    const [current, setCurrent] = React.useState('one');

    return (
    <section className={styles.section}>
        <h1 className={`${styles.title} p-5 text text_type_main-large`}>Соберите бургер</h1>
        <div className={styles.tabs}>
            <Tab value="one" active={current === 'one'} onClick={setCurrent}>
            Булки
            </Tab>
            <Tab value="two" active={current === 'two'} onClick={setCurrent}>
             Соусы
            </Tab>
            <Tab value="three" active={current === 'three'} onClick={setCurrent}>
            Начинки
            </Tab>
        </div>
        <div className={styles.content}>
        <h2 className={`${styles.element_title} text text_type_main-medium`}>Булки</h2>
        <div className={styles.element}> {
            bunArr.map((item) => (
                <BurgerIngredientsElement key={item._id} item={item} onOpen={handleShowDetails} />
            ))}
        </div>
        <h2 className={`${styles.element_title} text text_type_main-medium`}>Соусы</h2>
        <div className={styles.element}> {
            sauceArr.map((item) => (
                <BurgerIngredientsElement key={item._id} item={item} onOpen={handleShowDetails} />
            ))}
        </div>
        <h2 className={`${styles.element_title} text text_type_main-medium`}>Начинки</h2>
        <div className={styles.element}> {
            mainArr.map((item) => (
                <BurgerIngredientsElement key={item._id} item={item} onOpen={handleShowDetails} />
            ))}
        </div>
        {visibleModal &&(
            <Modal onClose={() => dispatch(closeDetails())} header={'Детали ингредиента'}>
                <IngredientDetails />
            </Modal>
        )}
        </div>         
    </section>
    )
  }

BurgerIngredients.ReactPropTypes = {
    ingredients: propTypes.arrayOf(ingredientTypes.isRequired).isRequired
}