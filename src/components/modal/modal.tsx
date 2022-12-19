import React, { ReactNode, SyntheticEvent } from 'react';
import ReactDOM from 'react-dom';
import  propTypes  from 'prop-types';

import styles from './modal.module.css';

import { ModalOverlay } from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const modalRootElement = document.getElementById("modal-root") as HTMLElement;

type TModalProps = {
    header?: string,
    onClose: () => void,
    children: ReactNode,
}

export function Modal ({header, onClose, children}:TModalProps): JSX.Element {

    React.useEffect(() => {
        document.addEventListener('keydown', handleEscCloseModal)
        return () => {
            document.removeEventListener('keydown', handleEscCloseModal)
        }
    }, [])

    function handleEscCloseModal(e: KeyboardEvent) {
        if(e.key === 'Escape') {
            onClose();
        }
    }

    return ReactDOM.createPortal(
        <>
            <div className={styles.container}>
                <div className={`${styles.header} p-10`}>
                    <h2 className={`${styles.title} text text_type_main-large`}>{header}</h2>
                    <CloseIcon type="primary" onClick={onClose}/>
                </div>
                {children}
            </div> 
            <ModalOverlay onClose={onClose} />
        </>,
        modalRootElement)
}

Modal.ReactPropTypes = {
    header: propTypes.string.isRequired,
    onClose: propTypes.func.isRequired,
    children: propTypes.element.isRequired
};