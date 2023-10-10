import React from "react";

const OrderPizza = () => {
    const createOrder = () => {
        
    }
  return (
    <>
        <h1>PIZZA</h1>
        <form id="pizza-form" onSubmit={createOrder}>
            <input type="text" id="name-input"/>
            <select id="size-dropdown">
                <option value='small'>Small</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>
            </select>
            <input type="checkbox" id="toppings-1"/>
            <input type="checkbox" id="toppings-2"/>
            <input type="checkbox" id="toppings-3"/>
            <input type="checkbox" id="toppings-4"/>
            <input type="text" id="special-text"/>

            <button type="submit" id="order-button">Create Order</button>
        </form>
    </>
  );
};
export default OrderPizza;
