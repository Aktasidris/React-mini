import { createSlice } from "@reduxjs/toolkit";

const addToStorageFromBasket = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};
const getBasketFromStorage = () => {
  if (localStorage.getItem("basket")) {
    return JSON.parse(localStorage.getItem("basket"));
  }
  return [];
};
const initialState = {
  basketproducts: getBasketFromStorage(),
  openstatus: false,
};
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    tooglebasket: (state, action) => {
      state.openstatus = action.payload;
    },
    addtoBasket: (state, action) => {
      const findproduct =
        state.basketproducts &&
        state.basketproducts.find(
          (product) => product.id === action.payload.id //callback fonksiyonundan sonra () parentezleri returnu ifade eder () yerine {} kullanılırsa find product undefined döner 
        );
      if (findproduct) {
        //aynı ürünü eklediğinde countu güncelle
        const extractedproduct =
          state.basketproducts &&
          state.basketproducts.filter(
            (product) => product.id != action.payload.id
          );

        findproduct.count += action.payload.count;
        state.basketproducts = [...extractedproduct, findproduct];
        addToStorageFromBasket(state.basketproducts);
      } else {
        //benzersiz ürünü sepete ve local stora ekle
        state.basketproducts = [...state.basketproducts, action.payload];
        addToStorageFromBasket(state.basketproducts);
      }
    },
    removeFromBasket: (state, action) => {
      const updatedBasket = state.basketproducts.filter(
        (product) => product.id !== action.payload
      );
      state.basketproducts = updatedBasket;
      addToStorageFromBasket(updatedBasket); // LocalStorage da güncellensin
    }
  },
});

export const { tooglebasket, addtoBasket,removeFromBasket } = basketSlice.actions;
export default basketSlice.reducer;
