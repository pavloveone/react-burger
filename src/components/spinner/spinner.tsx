import React from 'react';
import styles from './spinner.module.css';

type TSpinnerProps = {
    description: String;
}

export const Spinner = ({description}: TSpinnerProps):JSX.Element => {
    return (
        <div className={styles.spinner_overlay}>
        <div className={styles.spinner}>
            <p className='text text_type_digits-medium'>{description}</p>
        </div>
    </div>
    );
}