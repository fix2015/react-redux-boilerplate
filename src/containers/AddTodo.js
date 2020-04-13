import React, {useRef} from 'react'
import {connect, useDispatch} from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = () => {
    const dispatch = useDispatch();
    const input = useRef();

    const onSubmit = (e) => {
        e.preventDefault()
        if (!input.current.value.trim()) {
            return
        }
        dispatch(addTodo(input.current.value))
        input.current.value = ''
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input ref={input} />
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
}

export default AddTodo
