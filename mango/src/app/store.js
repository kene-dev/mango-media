import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';


import authReducer from '../features/auth/authSlice';
import clientReducer from '../features/client/clientSlice';
import chartReducer from '../features/chartData/chartSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
    auth: authReducer,
     client: clientReducer,
     feed: chartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
});
