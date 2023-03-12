import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';

export const fetchRooms = createAsyncThunk(
    'rooms/fetchRooms',
    async () => {
        const response = await fetch(baseUrl + 'rooms');
        if (!response.ok) {
            return Promise.reject(
                'Unable to fetch, status: ' + response.status
            );
        }
        const data = await response.json();
        return data;
    }
);

const roomsSlice = createSlice({
    name: 'rooms',
    initialState: { isLoading: true, errMess: null, roomsArray: [] },
    reducers: {},
    extraReducers: {
        [fetchRooms.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchRooms.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMess = null;
            state.roomsArray = action.payload;
        },
        [fetchRooms.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMess = action.error
                ? action.error.message
                : 'Fetch failed';
        }
    }
});

export const roomsReducer = roomsSlice.reducer;