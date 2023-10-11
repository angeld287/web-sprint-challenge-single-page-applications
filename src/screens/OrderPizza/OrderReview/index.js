import React from "react";
import './index.css'

const OrderReview = () => {
  const imageUrl = "https://st2.depositphotos.com/1581702/8235/v/950/depositphotos_82358774-stock-illustration-pizza-delivery-logo-design-logotype.jpg";
  return (
    <>
        <div className="home-page">
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
              <h1>Congrats! Pizza is on it's way!</h1>
            </div>
          </div>
        </div>
    </>
  );
};
export default OrderReview;

