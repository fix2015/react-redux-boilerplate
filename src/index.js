import React from 'react'
import { render } from 'react-dom'
import {compose, createStore} from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import DevTools from './containers/DevTools';
import { composeWithDevTools } from 'redux-devtools-extension';

const enhancer = compose(
    // DevTools.instrument(),
    composeWithDevTools()
);

const store = createStore(rootReducer, enhancer)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('container')
)
