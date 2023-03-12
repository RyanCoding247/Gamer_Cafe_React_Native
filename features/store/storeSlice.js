import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';

export const fetchStore = createAsyncThunk(
    'store/fetchStore',
    async () => {
        const response = await fetch(baseUrl + 'store');
        if (!response.ok) {
            return Promise.reject(
                'Unable to fetch, status: ' + response.status
            );
        }
        const data = await response.json();
        return data;
    }
);

const storeSlice = createSlice({
    name: 'store',
    initialState: { isLoading: true, errMess: null, storeArray: [] },
    reducers: {},
    extraReducers: {
        [fetchStore.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchStore.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMess = null;
            state.storeArray = action.payload;
        },
        [fetchStore.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMess = action.error
                ? action.error.message
                : 'Fetch failed';
        }
    }
});

export const storeReducer = storeSlice.reducer;