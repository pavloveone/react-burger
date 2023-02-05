import React from 'react';
import { TIngredient } from '../../utils/types';
import styles from './feed-card-images.module.css';

type TFeedCardImagesProps = {
    item: TIngredient,
}

export const FeedCardImages = ({ item }: TFeedCardImagesProps) => {
    
    return (
        <div className={styles.ingredient_preview}>
            <img className={styles.ingredient_image} src={item.image} />
        </div>
    );
}