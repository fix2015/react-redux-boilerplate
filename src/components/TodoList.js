import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import {VisibilityFilters} from '../constants'
import {useSelector, useDispatch } from "react-redux";
import { toggleTodo } from '../actions'

const TodoList = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const todos = getVisibleTodos(state.todos, state.visibilityFilter);
    const dispatchToggleTodo = (id) => {
        dispatch(toggleTodo(id));
    }

    return (
        <ul>
            {todos.map(todo =>
                <Todo
                    key={todo.id}
                    {...todo}
                    onClick={() => dispatchToggleTodo(todo.id)}
                />
            )}
        </ul>
    )
}


const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

export default TodoList
