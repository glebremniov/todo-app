import React from 'react';
import './TodoList.css'

import TodoListItem from '../TodoListItem'

const TodoList = ({ items = [], onItemDelete }) => {
    const elements = items.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={id} className="list-group-item">
                <TodoListItem
                    {...itemProps}
                    onItemDelete={() => onItemDelete(id)}
                />
            </li>
        )
    });

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
}

export default TodoList