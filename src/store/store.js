import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import commonReducer from '../storeManager/common/reducers';
import {createLogger} from 'redux-logger';

const middleware = [];
middleware.push(thunk);
const middlewares = [thunk];
const loggerMiddleware = createLogger({
    predicate: () => process.env.NODE_ENV !== 'production',
});
middleware.push(loggerMiddleware);
const store = createStore(combineReducers({commonReducer}), composeWithDevTools(applyMiddleware(...middlewares)));
export default store;
