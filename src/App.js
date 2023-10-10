import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import OrderPizza from "./screens/OrderPizza";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <h1>Lambda Eats</h1>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="pizza" element={<OrderPizza/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
