import React, { useState } from 'react';
import './index.css'; // Make sure to link your CSS file

const OrderPizzaForm = () => {
  const [name, setName] = useState('');
  const [size, setSize] = useState('small');
  const [toppings, setToppings] = useState({
    toppings1: false,
    toppings2: false,
    toppings3: false,
    toppings4: false
  });
  const [instructions, setInstructions] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (name.length < 2) {
      setErrorMessage('Name must be at least 2 characters');
    } else {
      // Process form submission logic here
      console.log('Form submitted:', { name, size, toppings, instructions });
      // Reset form and error message
      setName('');
      setSize('small');
      setToppings({
        toppings1: false,
        toppings2: false,
        toppings3: false,
        toppings4: false
      });
      setInstructions('');
      setErrorMessage('');
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form-section">
          <div className='session-header'>
            <h2>Basic Information</h2>
          </div>
          <div className='line-fields'>
            <div className="form-group name">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group size">
              <label htmlFor="size">Pizza Size:</label>
              <select
                id="size"
                name="size"
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
                  checked={toppings.toppings1}
                  onChange={() => setToppings({ ...toppings, toppings1: !toppings.toppings1 })}
                />
                Pepperoni
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={toppings.toppings2}
                  onChange={() => setToppings({ ...toppings, toppings2: !toppings.toppings2 })}
                />
                Grilled Chicken
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={toppings.toppings3}
                  onChange={() => setToppings({ ...toppings, toppings3: !toppings.toppings3 })}
                />
                Canadian Bacon
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={toppings.toppings4}
                  onChange={() => setToppings({ ...toppings, toppings4: !toppings.toppings4 })}
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
              id="instructions"
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
          <button type="submit" className="submit-button">Create Order</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </form>
    </div>
  );
};

export default OrderPizzaForm;