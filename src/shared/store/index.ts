import env from '../config/env';
import { storageMiddleware } from '@/features/settings/store/settings.effect';
import { settingsSlice } from '@/features/settings/store/settings.slice';
import baseApi from '@/shared/store/api';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  api: baseApi.reducer,
  settings: settingsSlice.reducer,
});

export const storeConfig = {
  reducer: rootReducer,
  devTools: env.IS_DEV,
  enhancers: (getDefaultEnhancers) => getDefaultEnhancers().prepend(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(
      baseApi.middleware,
      storageMiddleware.middleware,
    ),
};

export const store = configureStore(storeConfig);
