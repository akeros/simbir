import { configureStore } from '@reduxjs/toolkit';
import appReducer from './redux/appSlice';
import formReducer from './redux/formSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    form: formReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
