import React from 'react';
import styles from './feed-card-images.module.css';

export const FeedCardImages = ({ item }) => {
    
    return (
        <div className={styles.ingredient_preview}>
            <img className={styles.ingredient_image}  src={item.image} />
        </div>
    );
}