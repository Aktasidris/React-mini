import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  products: [],
  selectedProducti: {},
  loading: false,
  filteredproducts: [],
};

const BASE_URL = "https://fakestoreapi.com";

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    selectedProduct: (state, action) => {
      state.selectedProducti = action.payload;
    },
    filterProduct: (state, action) => {
      //[]products>product>product.category
      //product.category==action.payload push.filter array[]
      state.products &&
        state.products.filter(
          (product) =>
            (state.filteredproducts = product.category == action.payload)
        );
    },
  },
  extraReducers: (buildier) => {
    buildier.addCase(getAllProducts.pending, (state) => {
      console.log("API çağrısı başladı!");
      state.loading = true;
    });
    buildier.addCase(getAllProducts.fulfilled, (state, action) => {
      console.log("API verileri alındı!");
      state.loading = false;
      state.products = action.payload;
    });
    buildier.addCase(getAllProducts.rejected, (state) => {
      console.error("Veri çekme işlemi başarısız!");
      state.loading = false;
    });
  },
});

export const { selectedProduct } = productSlice.actions;
export default productSlice.reducer;
