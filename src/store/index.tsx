import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createHashHistory from 'history/createHashHistory';
import reducer from '../reducers';

export const history = createHashHistory();
const middlewares: Array<any> = [];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger());
}

const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;
