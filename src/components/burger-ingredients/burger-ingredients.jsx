import React from "react";

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from '../modules/burger-ingredients.module.css';

import { Modal } from '../modal/modal';
import {BurgerIngredientsElement} from '../burger-ingredients-element/burger-ingredients-element';
import { IngredientDetails } from "../ingredient-details/ingredient-details";

export function BurgerIngredients({data}) {

    const bunArr = [data][0].filter((item) => item.type === 'bun');
    const sauceArr = [data][0].filter((item) => item.type === 'sauce');
    const mainArr = [data][0].filter((item) => item.type === 'main');

    const [isVisibleIngredient, setIsVisibleIngredient] = React.useState(false)
    const [currentItem, setCurrentItem] = React.useState()

    const showDetails = React.useCallback((item) => {
        setCurrentItem(item);
        setIsVisibleIngredient(true);
    }, [])

    function handleCloseIngredient() {
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