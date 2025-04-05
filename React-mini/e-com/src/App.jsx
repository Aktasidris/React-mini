import "./App.css";
import React from "react";
import Header from "./components/Header";
import RouterConfing from "./config/RouterConfing";
import Loading from "./components/Loading";
import Drawer from "@mui/material/Drawer";
import { useSelector, useDispatch } from "react-redux";
import { tooglebasket } from "./redux/slices/basketSlice";
import Basket from "./pages/Basket";

function App() {
  const { openstatus,basketproducts} = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <RouterConfing />
      <Loading />
      <Drawer
        anchor={"right"}
        open={openstatus}
        onClose={() => dispatch(tooglebasket(!openstatus))}
      >
        <Basket basket={basketproducts}></Basket>
      </Drawer>
    </div>
  );
}

export default App;
