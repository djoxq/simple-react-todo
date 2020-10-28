import React from 'react';
import ToDoItem from "./ToDoItem";
import '../styles/ToDoList.css';

function ToDoList(props) {
    const { items, setIsModalOpen, canCreate, title, moveToDone } = props;

    return (
        <div className="todo-list">
            <div>
                <span className="todo-title">{ title }</span>
                {
                    items.map((item) => {
                        return <ToDoItem key={item.id} item={item} isClickable={canCreate} moveToDone={moveToDone}/>
                    })
                }
            </div>
            {canCreate && (<button className="add-item-btn" onClick={() => setIsModalOpen(true)}>Add Item</button>)}
        </div>
    );
}

export default ToDoList;