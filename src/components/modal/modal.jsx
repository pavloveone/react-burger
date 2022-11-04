import React from 'react';
import ReactDOM from 'react-dom';
import { ModalOverlay } from '../modal-overlay/modal-overlay';
import styles from '../modules/modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const modalRootElement = document.getElementById("modal-root");

export function Modal(props) {

    if(!props.isVisible) {  
        return null
    }

    return ReactDOM.createPortal(
        <ModalOverlay>
            <div className={styles.container}>
                <div className={`${styles.header} p-40`}>
                    <h2 className={`${styles.title} text text_type_main-large`}>Детали ингредиента</h2>
                    <CloseIcon type="primary" onClick={props.onClose}/>
                </div>
                <div className={styles.body}>
                    {props.children}
                </div>
            </div> 
        </ModalOverlay>,
        modalRootElement)
}