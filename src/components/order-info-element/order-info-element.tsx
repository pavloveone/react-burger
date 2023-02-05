import React from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './order-info-element.module.css';
import { useSelector } from '../../services/hooks/hooks';
import { TIngredient } from '../../utils/types';


type TOrderInfoElementProps = {
    item: String | undefined;
    count: TIngredient[] | undefined;
}

export const OrderInfoElement = ({ item, count }: TOrderInfoElementProps): JSX.Element => {
    
    const { ingredients } = useSelector(state => state.ingredients);
    const currentItem = ingredients.find((element) => element._id === item);

    const counter = count && count.map(item => item).find(element => element._id === item);

    return (
        <div className={styles.element}>
            <div className={styles.ingredient}>
                <div className={styles.element_image}>
                    <img src={currentItem?.image} />
                </div>
                <span className={`${styles.element_name} text text_type_main-small pl-2`}>{currentItem?.name}</span>
            </div>
            <div className={styles.price}>
                <span className={`${styles.element_count} text text_type_digits-default`}>{`${ counter && counter.count}x`}</span>
                <span className={`${styles.element_price} text text_type_digits-default pr-2`}>{currentItem?.price}</span>
                <CurrencyIcon type="primary" />
            </div>
        </div>
    );
}