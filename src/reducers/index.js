import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";

import setter from './setter';
import { reduce } from "lodash";

const rootReducer = combineReducers({ setter });

const persistConfig = {
    key: 'root',
    storage ,
    whitelist: ['setter']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;