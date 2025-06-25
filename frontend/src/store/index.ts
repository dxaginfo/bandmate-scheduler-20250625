import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

// Import reducers
import authReducer from '../features/auth/authSlice';
import bandsReducer from '../features/bands/bandsSlice';
import rehearsalsReducer from '../features/rehearsals/rehearsalsSlice';
import availabilityReducer from '../features/availability/availabilitySlice';
import uiReducer from '../features/ui/uiSlice';

// Root reducer with all feature reducers
const rootReducer = combineReducers({
  auth: authReducer,
  bands: bandsReducer,
  rehearsals: rehearsalsReducer,
  availability: availabilityReducer,
  ui: uiReducer,
});

// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // Only persist auth state
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }).concat(thunk),
  devTools: process.env.NODE_ENV !== 'production',
});

// Create persistor
export const persistor = persistStore(store);

// Export types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;