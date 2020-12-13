import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';

export const middleware = [ReduxThunk];

const createStoreWithMiddlewares = applyMiddleware(...middleware)(createStore);

export default createStoreWithMiddlewares(rootReducer);
