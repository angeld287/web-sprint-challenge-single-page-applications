import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import OrderPizza from "./screens/OrderPizza";

const App = () => {
  const [activeOption, setActiveOption] = useState('home');

  return (
    <>
        <div className="navigator">
          <div className="logo">
            <h4>BloomTech Eats</h4>
          </div>
          <div className="options">
            <nav>
              <Link className="nav-links" to="/">
                <button
                  className={activeOption === 'home' ? 'button-active' : 'button'}
                  onClick={() => setActiveOption('home')}
                >
                  Home
                </button>
              </Link>
              <Link className="nav-links" to="pizza">
                <button
                  className={activeOption === 'pizza' ? 'button-active' : 'button'}
                  onClick={() => setActiveOption('pizza')}
                >
                  Create Order
                </button>
              </Link>
            </nav>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="pizza/*" element={<OrderPizza/>} />
        </Routes>
    </>
  );
};
export default App;
