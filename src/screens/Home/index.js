import React from "react";
import './index.css'
import { Link } from "react-router-dom";

const Home = () => {
  const imageUrl = "https://www.saborusa.com/do/wp-content/uploads/sites/8/2019/11/Animate-a-disfrutar-una-deliciosa-pizza-de-salchicha-Foto-destacada.png";
  return (
    <>
        <div className="top-home-page">
          <div className="container">
            <div className="background-image-container">
              <img
                className="background-image"
                src={imageUrl}
                alt="Pizza deliciosa"
              />
              <div className="overlay"></div>
            </div>
            <div className="image-center">
              <Link to="pizza"><button id="order-pizza" className="order-button">Create Order</button></Link>
            </div>
          </div>
        </div>
        <div className="body-home-page">

        </div>
    </>
  );
};
export default Home;
