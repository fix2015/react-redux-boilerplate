import {combineReducers} from "redux";

let nextTodoId = 0
// export const addTodo = text => ({
//     type: 'ADD_TODO',
//     id: nextTodoId++,
//     text
// })
//
// export const setVisibilityFilter = filter => ({
//     type: 'SET_VISIBILITY_FILTER',
//     filter
// })
//
// export const toggleTodo = id => ({
//     type: 'TOGGLE_TODO',
//     id
// })


import {createSlice} from "@reduxjs/toolkit";
import {VisibilityFilters} from "../constants";

const todo = createSlice({
    name: "todo",
    initialState: [],
    reducers: {
        addTodo(state, action) {
            const text = action.payload;

            state.push({
                id: nextTodoId++,
                text: text,
                completed: false
            });
        },
        toggleTodo(state, action) {
            const id = action.payload;

            state.forEach(todo => {
                    if (todo.id === id) {
                        todo.completed = !todo.completed
                    }
                }
            )
        }
    }
});

const visibilityFilter = createSlice({
    name: "visibilityFilter",
    initialState: VisibilityFilters.SHOW_ALL,
    reducers: {
        setVisibilityFilter(state, action) {
            return  action.payload;
        },
    }
});


const {actions: acrionsTodo, reducer: todoReducer} = todo;
export const {addTodo, toggleTodo} = acrionsTodo;

const {actions: actionsVisibilityFilter, reducer: reducerVisibilityFilter} = visibilityFilter;
export const {setVisibilityFilter} = actionsVisibilityFilter;


export default combineReducers({
    todos: todoReducer,
    visibilityFilter: reducerVisibilityFilter
})


