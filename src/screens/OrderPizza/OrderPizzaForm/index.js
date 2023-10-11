import React, { useState } from 'react';
import './index.css'; // Make sure to link your CSS file

const OrderPizzaForm = () => {
  const [name, setName] = useState('');
  const [size, setSize] = useState('small');
  const [toppings, setToppings] = useState({
    pepperoni: false,
    grilledChicken: false,
    canadianBacon: false,
    greenPepper: false
  });
  const [instructions, setInstructions] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (name.length < 2) {
      setErrorMessage('name must be at least 2 characters');
    } else {
      // Process form submission logic here
      console.log('Form submitted:', { name, size, toppings, instructions });
      // Reset form and error message
      setName('');
      setSize('small');
      setToppings({
        pepperoni: false,
        grilledChicken: false,
        canadianBacon: false,
        greenPepper: false
      });
      setInstructions('');
      setErrorMessage('');
    }
  };

  return (
    <div className="form-container">
      <form id="pizza-form" className="form" onSubmit={handleFormSubmit}>
        <div className="form-section">
          <div className='session-header'>
            <h2>Basic Information</h2>
          </div>
          <div className='line-fields'>
            <div className="form-group name">
              <label htmlFor="name-input">Name:</label>
              <input
                type="text"
                id="name-input"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group size">
              <label htmlFor="size-dropdown">Pizza Size:</label>
              <select
                id="size-dropdown"
                name="size-dropdown"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                required
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className='session-header'>
            <h2>Toppings</h2>
          </div>
          <div className="form-group">
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  value='pepperoni'
                  checked={toppings.pepperoni}
                  onChange={() => setToppings({ ...toppings, pepperoni: !toppings.pepperoni })}
                />
                Pepperoni
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={toppings.grilledChicken}
                  onChange={() => setToppings({ ...toppings, grilledChicken: !toppings.grilledChicken })}
                />
                Grilled Chicken
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={toppings.canadianBacon}
                  onChange={() => setToppings({ ...toppings, canadianBacon: !toppings.canadianBacon })}
                />
                Canadian Bacon
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={toppings.greenPepper}
                  onChange={() => setToppings({ ...toppings, greenPepper: !toppings.greenPepper })}
                />
                Green Pepper
              </label>
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className='session-header'>
            <h2>Special Instructions</h2>
          </div>
          <div className="form-group">
            <textarea
              id="special-text"
              name="instructions"
              rows="4"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="form-section">
          <div className='session-header'>
            <h2>Submission</h2>
          </div>
          <button type="submit" id="order-button" className="submit-button">Create Order</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </form>
    </div>
  );
};

export default OrderPizzaForm;