import React from 'react';

import { Modal } from '../modal/modal';

export function OrderDetails(props) {
    return (
        <Modal>
            <h2>034536</h2>
            <h3>Идентификатор заказа</h3>
            <img alt='done' />
            <p>Ваш заказ начали готовить</p>
            <span>Дождитесь готовности на орбитальной станции</span>
        </Modal>
    );
}