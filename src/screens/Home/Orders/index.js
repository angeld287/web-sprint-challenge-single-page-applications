import React from 'react';
import './index.css'; // Make sure to link your CSS file

const Orders = () => {
  return (
    <div className="gallery">
      <div className='gallery-header'>
        <h4>Food Delivery in Santo Domingo</h4>
      </div>
      {cards.map(card => (
        <div className="card" key={card.id}>
          <div className="card-image">
            <img src={card.image} alt={card.foodName} />
          </div>
          <div className="details">
            <h5>{card.foodName}</h5>
            <span className="company">{card.restaurant}</span>
            <div className="price-duration">
              <span className="duration">{card.duration}</span>
              <span className="price">{card.price}</span>
              <span className="plus">+</span>
              <span className="delivery">{card.deliveryFee}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const cards = [
  {
    id: 1,
    restaurant: 'D Bree',
    foodName: 'Breeches',
    duration: '30 mins',
    price: '$15',
    deliveryFee: '$3',
    image: 'https://thrivinghomeblog.com/wp-content/uploads/2023/05/whole-wheat-calzones-6.jpg'
  },
  {
    id: 2,
    restaurant: 'EmpC',
    foodName: 'Empanadas',
    duration: '30 mins',
    price: '$15',
    deliveryFee: '$3',
    image: 'https://www.gourmet.cl/wp-content/uploads/2017/08/empanadas-mariscos-570x330.jpg'
  },
  {
    id: 3,
    restaurant: 'Sea F',
    foodName: 'Camarones',
    duration: '30 mins',
    price: '$15',
    deliveryFee: '$3',
    image: 'https://santa-priscila.com/wp-content/uploads/2020/06/Recetas_02.jpg'
  },
  {
    id: 4,
    restaurant: 'Company Name',
    foodName: 'Food Name',
    duration: '30 mins',
    price: '$15',
    deliveryFee: '$3',
    image: 'https://www.prensalibre.com/wp-content/uploads/2021/11/EDN-14112021-SOPA-MARINERA.jpg'
  },
  {
    id: 5,
    restaurant: 'Company Name',
    foodName: 'Food Name',
    duration: '30 mins',
    price: '$15',
    deliveryFee: '$3',
    image: 'https://i.pinimg.com/originals/70/34/12/7034128f64ce052c944fb8c96b717b9a.jpg'
  },
  {
    id: 6,
    restaurant: 'DBestR',
    foodName: 'Food Name',
    duration: '30 mins',
    price: '$15',
    deliveryFee: '$3',
    image: 'https://mexicanappetizersandmore.com/wp-content/uploads/Espagueti-con-Carne-Molida-1-3.jpg'
  },
];

export default Orders;
