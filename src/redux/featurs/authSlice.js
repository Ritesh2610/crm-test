import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import *as api from "../api"

const login = createAsyncThunk("/login", async ({ formData, toast, navigate }) => {

    try {
        const res = await api.login(formData);
        toast.success("Login Successfully");
        navigate("/")
        return res
    } catch (error) {
        toast.error(error.response.data.message);
        throw error.response.data;
    }

})

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        error: null,
        loading: false,
    },

    extraReducers: (builder) => {

        builder.addCase(login.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.data;
            if(action.payload.status === 200){
                localStorage.setItem("crm_user", JSON.stringify(action.payload));
            }
        })
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        })
    }
})

export { login }
export default authSlice.reducer;