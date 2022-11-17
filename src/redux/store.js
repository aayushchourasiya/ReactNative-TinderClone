import {configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import basicReducer from '../redux/slices/basicSlice';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, basicReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleWare =>
    getDefaultMiddleWare({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
