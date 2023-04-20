import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const userSignup = createAsyncThunk(
    'user/signup',
    async ({ username, password, firstname, lastname, email, remember }, { dispatch }) => {
        const response = await fetch(baseUrl + 'user/signup', {
            method: 'POST',
            body: JSON.stringify({ username, password, firstname, lastname, email, remember }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            console.log(response.status);
            Alert.alert(`Error code: ${response.status}\nTry a different username`);
            return Promise.reject(response.status);
        }
        const data = await response.json();
        if (data.success) {
            Alert.alert('1 sec')
            setTimeout(() => {
                Alert.alert(
                    'Registration successful!\nLogging you in!'
                );
            }, 2000)
            setTimeout(() => {
                Alert.alert('You can close this now!')
                dispatch(userLogin({ username, password })) 
            }, 3500);
        }
        return data;
    }
);

export const userLogin = createAsyncThunk(
    'user/login',
    async ({ username, password }, { dispatch }) => {
        const response = await fetch(baseUrl + 'user/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            console.log(response.status);
            // Alert.alert(`Error code: ${response.status}\nTry a different username`);
            return Promise.reject(response.status);
        }

        const data = await response.json();
        dispatch(setCurrentUser(data));
        return data;
    }
);

export const userLogout = createAsyncThunk('user/logout', async () => {

    const bearer = 'Bearer ' + await AsyncStorage.getItem('token');
    console.log(bearer);

    const response = await fetch(baseUrl + 'user/logout', {
        headers: {
            Authorization: bearer,
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    });

    // Remove the token on client side no matter what happens with the fetch
    AsyncStorage.removeItem('token');
    AsyncStorage.removeItem('user');

    if (!response.ok) {
        return Promise.reject(
            'There was a problem with logging out on the server side, status: ' +
            response.status
        );
    }

    const data = await response.json();
    return data;
});

export const validateLogin = createAsyncThunk(
    'user/validateLogin',
    async (values, { dispatch }) => {
        const bearer = 'Bearer ' + AsyncStorage.getItem('token');

        const response = await fetch(baseUrl + 'user/checkJWTtoken', {
            headers: {
                Authorization: bearer,
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        });

        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();

        if (!data.success) {
            dispatch(clearCurrentUser());
        }

        return data;
    }
);


// initial values for user slice of state
const initialState = {
    isLoading: false,
    isAuthenticated: AsyncStorage.getItem('token') ? true : false,
    // token: AsyncStorage.getItem('token'),
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload.id;
        },
        clearCurrentUser: (state) => {
            state.isAuthenticated = false;
            state.isLoading = false;
            AsyncStorage.removeItem('token');
        }
    },
    extraReducers: {
        [userLogin.pending]: (state) => {
            state.isLoading = true;
            AsyncStorage.removeItem('token');
        },
        [userLogin.fulfilled]: (state, action) => {
            state.isLoading = false;
            AsyncStorage.setItem('token', action.payload.token);
            AsyncStorage.setItem('user', action.payload.username);
            state.username = action.payload.username;
            console.log(
                `Login successful for user with _id: ${action.payload.id}\n
                token via astorage: ${AsyncStorage.getItem('token').then((res) => res)}`
            );
        },
        [userLogin.rejected]: (state, action) => {
            state.isLoading = false;
            AsyncStorage.removeItem('token');
            alert('Login failed.', action.error.message);
        },
        [userLogout.fulfilled]: (state) => {
            state.isLoading = false;
            state.username = '';
            console.log('logged out');
            Alert.alert('You have logged out!')
        },
        [userLogout.rejected]: (state) => {
            state.isLoading = false;
            console.log('oops');
        },
        [userSignup.pending]: (state) => {
            state.isLoading = true;
        },
        [userSignup.rejected]: (state) => {
            state.isLoading = false;
        }
    }
});

export const userReducer = userSlice.reducer;

export const { setCurrentUser, clearCurrentUser } = userSlice.actions;

export const isAuthenticated = () => {
    return AsyncStorage.getItem('token') ? true : false;
};
