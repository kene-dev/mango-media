import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authservice from "./authService";
import axios from "axios";

// GET USER FROM LOCAL STORAGE
const user = JSON.parse(localStorage.getItem('user'))


//INITIAL STATE FOR THE AUTH 
const initialState = {
    user : user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message:''
}

 //ADMIN LOGIN FUNCTION
export const login = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
    try {
        return await authservice.login(userData)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() 
        return thunkAPI.rejectWithValue(message)
    }
})

export const createClient = createAsyncThunk('auth/create', async (createUser, thunkAPI) => {
    console.log("USER REQUEST: " + JSON.stringify(createUser))
    try {
         const response = await axios.post('https://mangospace-media.onrender.com/api/v1/auth', createUser)
         console.log(response);
         if (response.status === 201) {
            console.log("IT WORKED MOTHERSUCKERS!!!")
             return "User created successfully"
         }
    } catch (error) {
        console.log("AUTH SLICE " + error.message)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() 
        return thunkAPI.rejectWithValue(message)
    }
})

// //ADMIN REGISTER FUNCTION
// export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
//     try {
//         return await authservice.register(user)
//     } catch (error) {
//         const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() 
//         return thunkAPI.rejectWithValue(message)
//     }
// })

// //ADMIN VERIFY EMAIL FUNCTION
// export const verify = createAsyncThunk('auth/verify', async (user, thunkAPI) => {
//     try {
//         return await authservice.verify(user)
//     } catch (error) {
//         const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() 
//         return thunkAPI.rejectWithValue(message)
//     }
// })

//ADMIN LOGOUT FUNCTION
export const logout = createAsyncThunk('auth/logout',  () => {  
     authservice.logout() 
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    // RESET STATE ACTION
    reducers:{
        reset:(state) => {
            state.isError = false
            state.isLoading = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers:(builder) => {
        builder
        // LOGIN HANDLER
        .addCase(login.pending, (state) =>{
            state.isLoading = true
        })
        .addCase(login.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(login.rejected, (state, action) =>{
            state.isLoading = false 
            state.isError = true
            state.message = action.payload
            state.user = null
        })
        
         // CREATE CLIENT HANDLER
        .addCase(createClient.pending, (state) =>{
            state.isLoading = true
        })
        .addCase(createClient.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.message = action.payload
        })
        .addCase(createClient.rejected, (state, action) =>{
            state.isLoading = false 
            state.isError = true
            state.message = action.payload
        })

         // LOGOUT HANDLER
         .addCase(logout.fulfilled, (state) => {
            state.user = null
        })
    },
})

export const {reset} = authSlice.actions
export default authSlice.reducer