import React from 'react';
import ReactDOM from 'react-dom';
import  propTypes  from 'prop-types';

import styles from './modal.module.css';

import { ModalOverlay } from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const modalRootElement = document.getElementById("modal-root");


export function Modal (props) {

    React.useEffect(() => {
        document.addEventListener('keydown', handleEscCloseModal)
        return (e) => {
            document.removeEventListener('keydown', handleEscCloseModal)
        }
    }, [])

    function handleEscCloseModal(e) {
        if(e.key === 'Escape') {
            props.onClose();
        }
    }

    return ReactDOM.createPortal(
        <>
            <div className={styles.container}>
                <div className={`${styles.header} p-10`}>
                    <h2 className={`${styles.title} text text_type_main-large`}>{props.header}</h2>
                    <CloseIcon type="primary" onClick={props.onClose}/>
                </div>
                {props.children}
            </div> 
            <ModalOverlay onClose={props.onClose} />
        </>,
        modalRootElement)
}

Modal.ReactPropTypes = {
    header: propTypes.string.isRequired,
    onClose: propTypes.func.isRequired,
    children: propTypes.element.isRequired
};