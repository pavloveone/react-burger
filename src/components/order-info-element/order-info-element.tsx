import React from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './order-info-element.module.css';
import { useSelector } from '../../services/hooks/hooks';
import { TOrderInfo } from '../../utils/types';


type TOrderInfoElementProps = {
    item: String;
}

export const OrderInfoElement = ({ item }: TOrderInfoElementProps): JSX.Element => {
    
    const { ingredients } = useSelector(state => state.ingredients);
    const currentItem = ingredients.find((element) => element._id === item);

    const counter = React.useMemo(() => {
        let count = 0;
        if (currentItem?.type !== 'bun') {
            ++count;
        }
        else {
            count = 2;
        }
        return count
    }, [currentItem])

    return (
        <div className={styles.element}>
            <div className={styles.ingredient}>
                <div className={styles.element_image}>
                    <img src={currentItem?.image} />
                </div>
                <span className={`${styles.element_name} text text_type_main-small pl-2`}>{currentItem?.name}</span>
            </div>
            <div className={styles.price}>
                <span className={`${styles.element_count} text text_type_digits-default`}>{`${counter}x`}</span>
                <span className={`${styles.element_price} text text_type_digits-default pr-2`}>{currentItem?.price}</span>
                <CurrencyIcon type="primary" />
            </div>
        </div>
    );
}