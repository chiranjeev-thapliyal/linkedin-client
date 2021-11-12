import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import messengerReducer from './Messenger/reducer';

const store = createStore(messengerReducer, applyMiddleware(thunk));

export default store;
