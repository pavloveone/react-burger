import React from 'react';
import styles from './card-image-counter.module.css';

export const CardImageCounter = ({item}) => {
    return (
        <div className={styles.counter_preview}>
            <img className={styles.counter_image} src={item.image} />
        </div>
    );
}