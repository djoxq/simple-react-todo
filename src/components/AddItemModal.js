import React from 'react';
import '../styles/AddItemModal.css';

function AddItemModal(props) {
    const { itemName, setItemName, isModalOpen, setIsModalOpen, onAddNewItem } = props;

    return (
        <div className={`modal__overlay ${isModalOpen ? "active" : ""}`}>
            <div className="modal__content">
                <input placeholder="Enter item name..." className="item-name" type="text" value={itemName} onChange={e => setItemName(e.target.value)}/>
                <div className="buttons__wrapper">
                    <button className="modal__button cancel" onClick={() => setIsModalOpen(false)}>Cancel</button>
                    <button className="modal__button" onClick={onAddNewItem}>Save</button>
                </div>
            </div>
        </div>
    );
}

export default AddItemModal;