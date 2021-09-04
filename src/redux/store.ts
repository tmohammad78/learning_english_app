import { configureStore } from '@reduxjs/toolkit';
import configReducer from './config/index';
import wordReducer from './words/index';

export const store = configureStore({
  reducer: {
    config: configReducer,
    words: wordReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
