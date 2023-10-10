import React from "react";
import { Route, Routes } from "react-router-dom";
import OrderPizzaForm from "./OrderPizzaForm";
import OrderReview from "./OrderReview";

const OrderPizza = () => {
   
  return (
    <>
        <Routes>
          <Route path="/" element={<OrderPizzaForm/>} />
          <Route path="review" element={<OrderReview/>} />
        </Routes>
    </>
  );
};
export default OrderPizza;
