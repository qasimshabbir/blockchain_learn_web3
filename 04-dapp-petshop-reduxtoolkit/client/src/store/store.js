import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import adoptionReducer from './adoptionSlice';

export default configureStore({
  reducer: {
    adoption: adoptionReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),
});
