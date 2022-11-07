import React from "react";
import  propTypes  from 'prop-types';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-ingredients.module.css';

import { Modal } from '../modal/modal';
import {BurgerIngredientsElement} from '../burger-ingredients-element/burger-ingredients-element';
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { ingredientTypes } from '../../utils/variables';

export function BurgerIngredients({data}) {

    const bunArr = React.useMemo(() => 
        data.filter((item) => 
            item.type === 'bun')
        );
    const sauceArr = React.useMemo(() => 
        data.filter((item) => 
            item.type === 'sauce')
        );
    const mainArr = React.useMemo(() => 
        data.filter((item) => 
            item.type === 'main')
        );

    const [isVisibleIngredient, setIsVisibleIngredient] = React.useState(false)
    const [currentItem, setCurrentItem] = React.useState(null)

    const showDetails = (item) => {
        setCurrentItem(item);
        setIsVisibleIngredient(true);
    };

    function handleCloseIngredient() {
        setCurrentItem(null)
        setIsVisibleIngredient(false);
    };


    const [current, setCurrent] = React.useState('one')
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
        <h2 className={`${styles.element_title} text text_type_main-medium`}>Булки</h2>
        <div className={styles.element}> {
            bunArr.map((item) => (
                <BurgerIngredientsElement key={item._id} item={item} onOpen={showDetails} />
            ))}
        </div>
        <h2 className={`${styles.element_title} text text_type_main-medium`}>Соусы</h2>
        <div className={styles.element}> {
            sauceArr.map((item) => (
                <BurgerIngredientsElement key={item._id} item={item} onOpen={showDetails} />
            ))}
        </div>
        <h2 className={`${styles.element_title} text text_type_main-medium`}>Начинки</h2>
        <div className={styles.element}> {
            mainArr.map((item) => (
                <BurgerIngredientsElement key={item._id} item={item} onOpen={showDetails} />
            ))}
        </div>
        {isVisibleIngredient &&(
            <Modal onClose={handleCloseIngredient} header={'Детали ингредиента'}>
                <IngredientDetails ingredient={currentItem} />
            </Modal>
        )}         
    </section>
    )
  }

BurgerIngredients.ReactPropTypes = {
    data: propTypes.arrayOf(ingredientTypes.isRequired).isRequired
}