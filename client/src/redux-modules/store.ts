import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";
import { weatherReducer } from "./Weather";

const reducers = combineReducers({
  weather: weatherReducer,         
});
 
const persistConfig = {
  key: 'root',
  storage
};
 
const persistedReducer = persistReducer(persistConfig, reducers);
 
 
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});
 
export default store;
