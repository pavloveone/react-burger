import React from 'react';
import styles from './feed-card-images.module.css';

export const FeedCardImages = ({item}) => {
    
    return (
        <img className={styles.ingredient_preview} src={item.image} />
    );
}