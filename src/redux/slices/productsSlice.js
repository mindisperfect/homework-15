import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { request } from "../../server";
// import { LIMIT } from "../../const";
import "../../components/styles/card.scss"

const initialState = {
  users: [],
  loading: false,
  // cart: [],
};

export const getProducts = createAsyncThunk(
  "products",
  async () => { // page - in parametr
    // const skip = (page - 1) * LIMIT;
    const {data}  = await request.get(`products`); // ?limit=${LIMIT}&page=${skip}`   
    return data;
  }
);

export const productsSlice = createSlice({
  name: "user",
  initialState,
  // reducers: {
  //   addProductToCart: (state, { payload }) => {
  //     let product = state.products.find((pr) => pr.id === payload);
  //     let check = state.cart.find((pr) => pr.id === payload);
  //     if (check) {
  //       state.cart = state.cart.map((pr) => {
  //         pr.id === check.id && pr.quantity++;
  //         return pr;
  //       });
  //     } else {
  //       product.quantity = 1;
  //       state.cart.push(product);
  //     }
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.error = ''
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.users = []
        state.error = action.error.message
      });
  },
});

export const { name: productsName } = productsSlice;

// export const { addProductToCart } = productsSlice.actions;

export default productsSlice.reducer;
