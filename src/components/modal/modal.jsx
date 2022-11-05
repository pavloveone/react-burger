import React from 'react';
import ReactDOM from 'react-dom';
import { ModalOverlay } from '../modal-overlay/modal-overlay';
import styles from '../modules/modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const modalRootElement = document.getElementById("modal-root");


export function Modal(props) {

    return ReactDOM.createPortal(
        <ModalOverlay>
            <div className={styles.container}>
                <div className={`${styles.header} p-10`}>
                    <h2 className={`${styles.title} text text_type_main-large`}>{props.header}</h2>
                    <CloseIcon type="primary" onClick={props.onClose}/>
                </div>
                {props.children}
            </div> 
        </ModalOverlay>,
        modalRootElement)
}