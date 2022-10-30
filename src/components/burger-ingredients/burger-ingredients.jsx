import React from "react";

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from '../modules/burger-ingredients.module.css';

import bun_1 from '../../images/bun-02.png';
import bun_2 from '../../images/bun-01.png';
import sauce_1 from '../../images/sauce-02.png';
import sauce_2 from '../../images/sauce-04.png';
import sauce_3 from '../../images/sauce-03.png';
import sauce_4 from '../../images/sauce-01.png';


export const BurgerIngredients = () => {
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
            <div className={styles.card_container}>
                <div className={styles.card}>
                    <Counter count={1} size="default" />
                    <img src={bun_1} className={`${styles.card_image} p-4`}/>
                    <div className={`${styles.price_container} p-1`}>
                        <p className={`${styles.price_text} text text_type_digits-default`}>20</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <p className={`${styles.card_caption} text text_type_main-default`}>Краторная булка N-200i</p>
                </div>
            </div>
                <div className={styles.card}>
                    <Counter count={1} size="default" />
                    <img src={bun_2} className={`${styles.card_image} p-4`}/>
                    <div className={`${styles.price_container} p-1`}>
                        <p className={`${styles.price_text} text text_type_digits-default`}>20</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <p className={`${styles.card_caption} text text_type_main-default`}>Флюоресцентная булка R2-D3</p>
                </div>
        </div>
        <h2 className={`${styles.element_title} text text_type_main-medium`}>Соусы</h2>
        <div className={styles.element}>
            <div className={styles.card_container}>
                <div className={styles.card}>
                    <Counter count={1} size="default" />
                    <img src={sauce_1} className={`${styles.card_image} p-4`}/>
                    <div className={`${styles.price_container} p-1`}>
                        <p className={`${styles.price_text} text text_type_digits-default`}>30</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <p className={`${styles.card_caption} text text_type_main-default`}>Соус Spicy-X</p>
                </div>
            </div>
                <div className={styles.card}>
                    <Counter count={1} size="default" />
                    <img src={sauce_2} className={`${styles.card_image} p-4`}/>
                    <div className={`${styles.price_container} p-1`}>
                        <p className={`${styles.price_text} text text_type_digits-default`}>30</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <p className={`${styles.card_caption} text text_type_main-default`}>Соус фирменный Space Sauce</p>
                </div>
                <div className={styles.card}>
                    <Counter count={1} size="default" />
                    <img src={sauce_3} className={`${styles.card_image} p-4`}/>
                    <div className={`${styles.price_container} p-1`}>
                        <p className={`${styles.price_text} text text_type_digits-default`}>30</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <p className={`${styles.card_caption} text text_type_main-default`}>Соус</p>
                </div>
                <div className={styles.card}>
                    <Counter count={1} size="default" />
                    <img src={sauce_4} className={`${styles.card_image} p-4`}/>
                    <div className={`${styles.price_container} p-1`}>
                        <p className={`${styles.price_text} text text_type_digits-default`}>30</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <p className={`${styles.card_caption} text text_type_main-default`}>Соус</p>
                </div>
        </div>      
    </section>
    )
  }