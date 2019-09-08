import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App/AppConnection';
import {combineReducers,createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from  './data/reducer/reducer';

const asyncReducer = combineReducers({
    state:reducer
});
var store = createStore(asyncReducer,applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>,document.getElementById('app'));
