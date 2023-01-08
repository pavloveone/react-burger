import React from 'react';
import  propTypes  from 'prop-types';

import styles from './modal-overlay.module.css';

type TModalOverlayProps = {
    onClose: () => void,
}

export function ModalOverlay({onClose}: TModalOverlayProps): JSX.Element {
    return(
        <div className={styles.overlay} onClick={onClose} />
    )
}

ModalOverlay.ReactPropTypes = {
    onClose: propTypes.func.isRequired
}