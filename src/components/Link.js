import React from 'react'
import PropTypes from 'prop-types'
import {setVisibilityFilter} from "../actions";
import {connect, useDispatch, useSelector} from "react-redux";

const Link = ({filter, children}) => {
    const active = useSelector((state) =>  filter === state.visibilityFilter);
    const dispatch = useDispatch();
    const onClick =() => {
        dispatch(setVisibilityFilter(filter))
    }

    return (
        <button
            onClick={() => onClick()}
            disabled={active}
            style={{
                marginLeft: '4px',
            }}
        >
            {children}
        </button>
    )
}

export default Link
