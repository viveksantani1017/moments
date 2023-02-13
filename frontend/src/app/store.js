import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { userSlice } from '../api/userSlice'

export const store = configureStore({
    reducer: {
        [userSlice.reducerPath]: userSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userSlice.middleware),
});