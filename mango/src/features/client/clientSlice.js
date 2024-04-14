import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    client : [],
    isLoading : false,
    isSuccess: false,
    isError: false,
    message:''
}


export const fetchClient = createAsyncThunk('client/fetchClient', async (thunkAPI) => {
    const token = JSON.parse(localStorage.getItem('user'))
    try {
        const response = await axios.get('https://mangospace-media.onrender.com/api/v1/user', {
            headers: {
                 Authorization:`Bearer ${token.token}`
            }
        })
        return response.data
    } catch (error) {
        console.log(error);
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() 
        return thunkAPI.rejectWithValue(message)
    }
    
})

export const removeClient = createAsyncThunk('client/delete', async (_id, thunkAPI) => {
    
    const token = JSON.parse(localStorage.getItem('user'))
    try {
        const response = await axios.get(`https://mangospace-media.onrender.com/api/v1/user/${_id}`, {
            headers: {
                 Authorization:`Bearer ${token.token}`
            }
        })
        return response.data;
    } catch (error) {
        // console.log(error);
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() 
        return thunkAPI.rejectWithValue(message)
    }
    
})


export const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
        resetClient:(state) => {
            state.client = []
            state.isError = false
            state.isLoading = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder 
        .addCase(fetchClient.pending, (state) => {
            state.isLoading = true
        })

        .addCase(fetchClient.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.client= action.payload
        })

        .addCase(fetchClient.rejected, (state, action) =>{
            state.isLoading = false 
            state.isError = true
            state.message = action.payload
        })

        .addCase(removeClient.pending, (state) => {
            state.isLoading = true
        })
        .addCase(removeClient.fulfilled, (state, action) => {
            state.isLoading = false,
            state.isSuccess = true,
            state.isError = false,
            state.message = action.payload
        })
        .addCase(removeClient.rejected, (state, action) => {
            state.isLoading = false,
            state.isSuccess = false,
            state.isError = true,
            state.message = action.payload
        })
    }
})


export const {resetClient} = clientSlice.actions
export default clientSlice.reducer