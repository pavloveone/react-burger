import React, { useEffect } from 'react';
import  propTypes  from 'prop-types';
import { useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-ingredients.module.css';

import {BurgerIngredientsElement} from '../burger-ingredients-element/burger-ingredients-element';
import { ingredientTypes } from '../../utils/variables';

export function BurgerIngredients() {

    const { ingredients } = useSelector((state) => state.ingredients);

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

    const [current, setCurrent] = React.useState('one');

    const [bunRef, inViewBun] = useInView({
        threshold: 0.5,
      });
      const [sauceRef, inViewSauce] = useInView({
        threshold: 0.5,
      });
      const [mainRef, inViewMain] = useInView({
        threshold: 0.2,
      });
    
      useEffect(() => {
        if (inViewBun) {
          setCurrent('bun');
        } else if (inViewSauce) {
          setCurrent('sauce');
        } else if (inViewMain) {
          setCurrent('main');
        }
      }, [inViewBun, inViewSauce, inViewMain]);

    return (
    <section className={styles.section}>
        <h1 className={`${styles.title} p-5 text text_type_main-large`}>Соберите бургер</h1>
        <div className={styles.tabs}>
            <Tab value='bun' active={current === 'bun'} onClick={setCurrent}>
            Булки
            </Tab>
            <Tab value='sauce' active={current === 'sauce'} onClick={setCurrent}>
             Соусы
            </Tab>
            <Tab value='main' active={current === 'main'} onClick={setCurrent}>
            Начинки
            </Tab>
        </div>
        <div className={styles.content}>
        <h2 className={`${styles.element_title} text text_type_main-medium`} ref={bunRef}>Булки</h2>
        <div className={styles.element}> {
            bunArr.map((item) => (
                <BurgerIngredientsElement key={item._id} item={item} />
            ))}
        </div>
        <h2 className={`${styles.element_title} text text_type_main-medium`} ref={sauceRef}>Соусы</h2>
        <div className={styles.element}> {
            sauceArr.map((item) => (
                <BurgerIngredientsElement key={item._id} item={item} />
            ))}
        </div>
        <h2 className={`${styles.element_title} text text_type_main-medium`} ref={mainRef}>Начинки</h2>
        <div className={styles.element}> {
            mainArr.map((item) => (
                <BurgerIngredientsElement key={item._id} item={item} />
            ))}
        </div>
        {/* {isVisible &&(
            <Modal onClose={handleCloseDetails} header={'Детали ингредиента'}>
                <IngredientDetails />
            </Modal>
        )} */}
        </div>         
    </section>
    )
  }

BurgerIngredients.ReactPropTypes = {
    ingredients: propTypes.arrayOf(ingredientTypes.isRequired).isRequired
}