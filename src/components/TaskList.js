import React, {PropTypes} from 'react'
import Todo from './Todo'

const TodoList = ({todos, onTodoClick, onTodoDeleteClick}) => {
    return (
        <div className="list-group">
            {todos.map(todo =>
                <Todo
                    newState = {todo}
                    onClick={() => onTodoClick(todo.id)}
                    onDeleteClick={() => onTodoDeleteClick(todo.id)}
                />
            )}
        </div>)
};

export default TodoList