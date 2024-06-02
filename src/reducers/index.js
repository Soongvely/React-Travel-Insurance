import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';

import setter from './setter';
import { reduce } from "lodash";

const rootReducer = combineReducers({ setter });

const persistConfig = {
    key: 'root',
    Storage ,
    whitelist: ['setter']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
    reducer: persistedReducer,
});

export default rootReducer;