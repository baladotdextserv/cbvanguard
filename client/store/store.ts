import { configureStore } from "@reduxjs/toolkit"
import {combineReducers} from "redux"
import { persistReducer, persistStore} from "redux-persist"
import storage from 'redux-persist/lib/storage'

import counterReducer from "./counter/counterSlice"
import customizerReducer from "./customizer/customizerSlice"

const persistConfig = {
    key: 'root',
    storage
};

export const store = configureStore({
    reducer:{
        counter:  persistReducer<any>(persistConfig,counterReducer),
        customizer: customizerReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false, immutableCheck: false
    })
});

const rootReducer = combineReducers({
    counter: counterReducer,
    customizer: customizerReducer
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>