import React from 'react'
import { render } from 'react-dom'
import {compose, createStore} from 'redux'
import { Provider, applyMiddleware } from 'react-redux'
import App from './components/App'
// import rootReducer from './reducers'
import DevTools from './containers/DevTools';
import { composeWithDevTools } from 'redux-devtools-extension';
const enhancer = compose(
    // DevTools.instrument(),
    composeWithDevTools()
);

//toolkit
import rootReducer from './actions'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
const store = configureStore({
    reducer: rootReducer,
    // middleware: [loggerMiddleware, ...getDefaultMiddleware()],
    // preloadedState,
    // enhancers: [monitorReducersEnhancer]
})


// const store = createStore(rootReducer, enhancer)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('container')
)
