import React from 'react';
import '../styles/ToDoItem.css';

function ToDoItem(props) {
    const { item, isClickable, moveToDone } = props;

    return (
        <div className={`todo-item ${isClickable ? "clickable" : ""}`} onClick={() => moveToDone(item)}>
            <p>{item.name}</p>
        </div>
    );
}

export default ToDoItem;