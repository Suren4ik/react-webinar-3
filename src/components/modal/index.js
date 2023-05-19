import React from 'react';
import Head from '../head/index';
import List from '../list/index';
import './style.css';

function Modal({ onClose, list, onDelete }) {
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-head">
                    <Head title='Корзина'>
                        <button className="close-button" onClick={onClose}>
                            Закрыть
                        </button>
                    </Head>
                </div>
                <div className="modal-list">
                    <List title='Удалить'
                        list={list}
                        onClick={onDelete} />
                </div>
                <div className="modal-res">
                    <span className='modal-res-title'>Итого</span>
                    <span className='modal-res-price'></span>
                </div>
            </div>
        </div>
    );
}

export default Modal;
