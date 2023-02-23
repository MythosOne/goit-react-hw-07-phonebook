import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL='https://63f745d2833c7c9c60805eff.mockapi.io/api/v1/'

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
        return  response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
        
    }
);