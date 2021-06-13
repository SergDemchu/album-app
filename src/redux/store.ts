import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';

import photosReducer from './photos/photosReducer';

const rootReducer = combineReducers({
	photos: photosReducer
});

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
