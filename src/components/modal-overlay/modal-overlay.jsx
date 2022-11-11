import React, { Children } from 'react';
import { isPropertySignature } from 'typescript';
import  propTypes  from 'prop-types';

import styles from './modal-overlay.module.css';

export function ModalOverlay({onClose}) {
    return(
        <div className={styles.overlay} onClick={onClose} />
    )
}

ModalOverlay.ReactPropTypes = {
    onClose: propTypes.func.isRequired
}