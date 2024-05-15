import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import *as api from "../api"

const addProduct = createAsyncThunk("/product/add", async ({ formData, toast }) => {

    try {
        const res = await api.addProduct(formData);
        toast.success("Product added successfully")
        return res.data
    } catch (error) {
        toast.error(error.response.data.message)
        throw error.response.data;
    }

})

const getAllProduct = createAsyncThunk("/product/get", async () => {

    try {
        const res = await api.getAllProduct();
        return res.data
    } catch (error) {
        throw error.response.data;
    }

})

const deleteProduct = createAsyncThunk("/product/delete", async ({ productId, toast }) => {

    try {
        const res = await api.deleteProduct(productId);
        toast.success("Product deleted successfully")
        return { res: res.data, productId }

    } catch (error) {
        toast.error(error.response.data.message)
        throw error.response.data;
    }

})

const updateProduct = createAsyncThunk("/product/update", async ({ formData, toast }) => {

    try {
        const res = await api.updateProduct(formData);
        toast.success("Product deleted successfully")
        return { res: res.data, productId: formData.id }

    } catch (error) {
        toast.error(error.response.data.message)
        throw error.response.data;
    }

})

const productSlice = createSlice({
    name: "product",
    initialState: {
        data: null,
        error: null,
        loading: false,
    },

    extraReducers: (builder) => {

        builder
            .addCase(addProduct.pending, (state, action) => {
                state.error = null;
            })
        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.data = [...state.data, action.payload];
        })
        builder.addCase(addProduct.rejected, (state, action) => {
            state.error = action.error;
        })
            .addCase(getAllProduct.pending, (state, action) => {
                state.loading = true;
            })
        builder.addCase(getAllProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload.products;
        })
        builder.addCase(getAllProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        })

        builder.addCase(deleteProduct.pending, (state, action) => {
            state.error = null
        })
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            state.data = state.data.filter((item) => item.id !== action.payload.productId);
        })
        builder.addCase(deleteProduct.rejected, (state, action) => {
            state.error = action.error;
        })

        builder.addCase(updateProduct.pending, (state, action) => {
            state.error = null
        })
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            state.data = state.data.map((item) => {
                if (item.id === action.payload.data.id) {
                    item = action.payload.data;
                }
                return item;
            });
        })
        builder.addCase(updateProduct.rejected, (state, action) => {
            state.error = action.error;
        })
    }
})

export { addProduct, getAllProduct, deleteProduct, updateProduct }
export default productSlice.reducer;