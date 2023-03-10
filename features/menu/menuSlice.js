import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';

export const fetchMenu = createAsyncThunk(
    'menu/fetchMenu',
    async () => {
        const response = await fetch(baseUrl + 'menu');
        if (!response.ok) {
            return Promise.reject(
                'Unable to fetch, status: ' + response.status
            );
        }
        const data = await response.json();
        return data;
    }
);

const menuSlice = createSlice({
    name: 'menu',
    initialState: { isLoading: true, errMess: null, menuArray: [] },
    reducers: {},
    extraReducers: {
        [fetchMenu.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchMenu.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMess = null;
            state.menuArray = action.payload;
        },
        [fetchMenu.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMess = action.error
                ? action.error.message
                : 'Fetch failed';
        }
    }
});

export const menuReducer = menuSlice.reducer;