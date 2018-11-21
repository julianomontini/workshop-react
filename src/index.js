import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import rootReducer from './reducers'
import * as serviceWorker from './serviceWorker';

import App from './App';
import Landing from './Landing';

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(ReduxThunk)
))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Link to="/">Home | </Link>
                <Link to="/todos">Todos</Link>
                <Route path="/" exact component={Landing} />
                <Route path="/todos" component={App} />
            </div>
        </Router>
    </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
