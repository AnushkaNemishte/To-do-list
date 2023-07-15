import {configureStore} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { ToDoApi } from '../api/ToDoApi';

export const Store =configureStore({
    reducer:{
        [ToDoApi.reducerPath]:ToDoApi.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(ToDoApi.middleware)
})
setupListeners(Store.dispatch)