import React from "react";

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from '../modules/burger-ingredients.module.css';

import {BurgerIngredientsElement} from '../burger-ingredients-element/burger-ingredients-element';

export function BurgerIngredients({data}) {

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
        <div className={styles.element}>
           <BurgerIngredientsElement name={data[0].name} image={data[0].image} price={data[0].price}/>
           <BurgerIngredientsElement price={data[14].price} name={data[14].name} image={data[14].image} />
        </div>
        <h2 className={`${styles.element_title} text text_type_main-medium`}>Соусы</h2>
        <div className={styles.element}>
            <BurgerIngredientsElement price={data[3].price} name={data[3].name} image={data[3].image} />
            <BurgerIngredientsElement price={data[6].price} name={data[6].name} image={data[6].image} />
            <BurgerIngredientsElement price={data[5].price} name={data[5].name} image={data[5].image} />
            <BurgerIngredientsElement price={data[9].price} name={data[9].name} image={data[9].image} />
        </div>
        <h2 className={`${styles.element_title} text text_type_main-medium`}>Начинки</h2>
        <div className={styles.element}>
            <BurgerIngredientsElement price={data[1].price} name={data[1].name} image={data[1].image} />
            <BurgerIngredientsElement price={data[2].price} name={data[2].name} image={data[2].image} />
            <BurgerIngredientsElement price={data[4].price} name={data[4].name} image={data[4].image} />
            <BurgerIngredientsElement price={data[7].price} name={data[7].name} image={data[7].image} />
            <BurgerIngredientsElement price={data[8].price} name={data[8].name} image={data[8].image} />
            <BurgerIngredientsElement price={data[10].price} name={data[10].name} image={data[10].image} />
            <BurgerIngredientsElement price={data[11].price} name={data[11].name} image={data[11].image} />
            <BurgerIngredientsElement price={data[12].price} name={data[12].name} image={data[12].image} />
            <BurgerIngredientsElement price={data[13].price} name={data[13].name} image={data[13].image} />
        </div>           
    </section>
    )
  }