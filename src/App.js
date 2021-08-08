import { useEffect } from "react";
import { useStateContext } from "./context";
import axios from "axios";
import { ProductListing } from "./components/ProductListing";
import { Route, Routes } from "react-router";
import { Header } from "./components/Header";
import { Wishlist } from "./pages/Wishlist/Wishlist";
import { Bag } from "./pages/Bag";

export const App = () => {
  const { dispatch } = useStateContext();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("products.json");
        dispatch({ type: "SET_PRODUCTS", payload: data.products });
      } catch (e) {
        console.log(e);
      }
    })();
  }, [dispatch]);

  return (
    <>
      <Header />

      <Routes>
        <Route exact path="/" element={<ProductListing />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/bag" element={<Bag />}></Route>
      </Routes>
    </>
  );
};
