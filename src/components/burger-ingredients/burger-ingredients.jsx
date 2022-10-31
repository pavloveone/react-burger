import React from "react";

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from '../modules/burger-ingredients.module.css';

import { data } from '../../utils/data';

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
                    <img src={data[0].image} className={`${styles.card_image} p-4`}/>
                    <div className={`${styles.price_container} p-1`}>
                        <p className={`${styles.price_text} text text_type_digits-default`}>{data[0].price}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <p className={`${styles.card_caption} text text_type_main-default`}>{data[0].name}</p>
                </div>
            </div>
                <div className={styles.card}>
                    <Counter count={1} size="default" />
                    <img src={data[14].image} className={`${styles.card_image} p-4`}/>
                    <div className={`${styles.price_container} p-1`}>
                        <p className={`${styles.price_text} text text_type_digits-default`}>{data[14].price}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <p className={`${styles.card_caption} text text_type_main-default`}>{data[14].name}</p>
                </div>
        </div>
        <h2 className={`${styles.element_title} text text_type_main-medium`}>Соусы</h2>
        <div className={styles.element}>
            <div className={styles.card_container}>
                <div className={styles.card}>
                    <Counter count={1} size="default" />
                    <img src={data[3].image} className={`${styles.card_image} p-4`}/>
                    <div className={`${styles.price_container} p-1`}>
                        <p className={`${styles.price_text} text text_type_digits-default`}>{data[3].price}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <p className={`${styles.card_caption} text text_type_main-default`}>{data[3].name}</p>
                </div>
            </div>
                <div className={styles.card}>
                    <Counter count={1} size="default" />
                    <img src={data[6].image} className={`${styles.card_image} p-4`}/>
                    <div className={`${styles.price_container} p-1`}>
                        <p className={`${styles.price_text} text text_type_digits-default`}>{data[6].price}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <p className={`${styles.card_caption} text text_type_main-default`}>{data[6].name}</p>
                </div>
                <div className={styles.card}>
                    <Counter count={1} size="default" />
                    <img src={data[5].image} className={`${styles.card_image} p-4`}/>
                    <div className={`${styles.price_container} p-1`}>
                        <p className={`${styles.price_text} text text_type_digits-default`}>{data[5].price}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <p className={`${styles.card_caption} text text_type_main-default`}>{data[5].name}</p>
                </div>
                <div className={styles.card}>
                    <Counter count={1} size="default" />
                    <img src={data[9].image} className={`${styles.card_image} p-4`}/>
                    <div className={`${styles.price_container} p-1`}>
                        <p className={`${styles.price_text} text text_type_digits-default`}>{data[9].price}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <p className={`${styles.card_caption} text text_type_main-default`}>{data[9].name}</p>
                </div>
        </div>
        <h2 className={`${styles.element_title} text text_type_main-medium`}>Начинки</h2>
        <div className={styles.element}>
            <div className={styles.card_container}>
                <div className={styles.card}>
                    <Counter count={1} size="default" />
                    <img src={data[2].image} className={`${styles.card_image} p-4`}/>
                    <div className={`${styles.price_container} p-1`}>
                        <p className={`${styles.price_text} text text_type_digits-default`}>{data[2].price}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <p className={`${styles.card_caption} text text_type_main-default`}>{data[2].name}</p>
                </div>
            </div>
                <div className={styles.card}>
                    <Counter count={1} size="default" />
                    <img src={data[4].image} className={`${styles.card_image} p-4`}/>
                    <div className={`${styles.price_container} p-1`}>
                        <p className={`${styles.price_text} text text_type_digits-default`}>{data[4].price}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <p className={`${styles.card_caption} text text_type_main-default`}>{data[4].name}</p>
                </div>
                <div className={styles.card}>
                    <Counter count={1} size="default" />
                    <img src={data[7].image} className={`${styles.card_image} p-4`}/>
                    <div className={`${styles.price_container} p-1`}>
                        <p className={`${styles.price_text} text text_type_digits-default`}>{data[7].price}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <p className={`${styles.card_caption} text text_type_main-default`}>{data[7].name}</p>
                </div>
                <div className={styles.card}>
                    <Counter count={1} size="default" />
                    <img src={data[8].image} className={`${styles.card_image} p-4`}/>
                    <div className={`${styles.price_container} p-1`}>
                        <p className={`${styles.price_text} text text_type_digits-default`}>{data[8].price}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <p className={`${styles.card_caption} text text_type_main-default`}>{data[8].name}</p>
                </div>
                <div className={styles.card}>
                    <Counter count={1} size="default" />
                    <img src={data[10].image} className={`${styles.card_image} p-4`}/>
                    <div className={`${styles.price_container} p-1`}>
                        <p className={`${styles.price_text} text text_type_digits-default`}>{data[10].price}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <p className={`${styles.card_caption} text text_type_main-default`}>{data[10].name}</p>
                </div>
                <div className={styles.card}>
                    <Counter count={1} size="default" />
                    <img src={data[11].image} className={`${styles.card_image} p-4`}/>
                    <div className={`${styles.price_container} p-1`}>
                        <p className={`${styles.price_text} text text_type_digits-default`}>{data[11].price}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <p className={`${styles.card_caption} text text_type_main-default`}>{data[11].name}</p>
                </div>
                <div className={styles.card}>
                    <Counter count={1} size="default" />
                    <img src={data[12].image} className={`${styles.card_image} p-4`}/>
                    <div className={`${styles.price_container} p-1`}>
                        <p className={`${styles.price_text} text text_type_digits-default`}>{data[12].price}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <p className={`${styles.card_caption} text text_type_main-default`}>{data[12].name}</p>
                </div>
                <div className={styles.card}>
                    <Counter count={1} size="default" />
                    <img src={data[13].image} className={`${styles.card_image} p-4`}/>
                    <div className={`${styles.price_container} p-1`}>
                        <p className={`${styles.price_text} text text_type_digits-default`}>{data[13].price}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <p className={`${styles.card_caption} text text_type_main-default`}>{data[13].name}</p>
                </div>
                <div className={styles.card}>
                    <Counter count={1} size="default" />
                    <img src={data[1].image} className={`${styles.card_image} p-4`}/>
                    <div className={`${styles.price_container} p-1`}>
                        <p className={`${styles.price_text} text text_type_digits-default`}>{data[1].price}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <p className={`${styles.card_caption} text text_type_main-default`}>{data[1].name}</p>
                </div>
        </div>           
    </section>
    )
  }