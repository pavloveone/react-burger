import React, { Children } from 'react';
import { isPropertySignature } from 'typescript';

import styles from '../modules/modal-overlay.module.css';

export function ModalOverlay(props) {
    return(
        <div className={styles.overlay}>
            {props.children}
        </div>
    )
}