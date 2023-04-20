import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
    persistStore,
    persistCombineReducers,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { menuReducer } from '../features/menu/menuSlice';
import { eventsReducer } from '../features/events/eventsSlice';
import { gamesReducer } from '../features/games/gamesSlice';
import { storeReducer } from '../features/store/storeSlice';
import { roomsReducer } from '../features/rooms/roomsSlice';
import { userReducer } from '../features/user/userSlice';

const config = {
    key: 'root',
    storage: AsyncStorage,
    debug: true
}

export const store = configureStore({
    reducer: persistCombineReducers(config, {
        menu: menuReducer,
        events: eventsReducer,
        games: gamesReducer,
        store: storeReducer,
        rooms: roomsReducer,
        user: userReducer,
    }),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
});

export const persistor = persistStore(store);