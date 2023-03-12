import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';

export const fetchGames = createAsyncThunk(
    'games/fetchgames',
    async () => {
        const response = await fetch(baseUrl + 'games');
        if (!response.ok) {
            return Promise.reject(
                'Unable to fetch, status: ' + response.status
            );
        }
        const data = await response.json();
        return data;
    }
);

const gamesSlice = createSlice({
    name: 'games',
    initialState: { isLoading: true, errMess: null, gamesArray: [] },
    reducers: {},
    extraReducers: {
        [fetchGames.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchGames.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMess = null;
            state.gamesArray = action.payload;
        },
        [fetchGames.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMess = action.error
                ? action.error.message
                : 'Fetch failed';
        }
    }
});

export const gamesReducer = gamesSlice.reducer;