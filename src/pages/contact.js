import React, { useState } from 'react';
import './style.css';

function Form() {
  // Here we set two state variables for name and email using `useState`
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, inputValue } = e.target;

    // Ternary statement that will call either setName or setEmail based on what field the user is typing in
    if (name === 'email') {
      setEmail(inputValue);
  } else if (name === 'name') {
      setName(inputValue);
  } else {
      setMessage(inputValue);
  }
};

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

   
    setMessage('')
    setName('');
    setEmail('');
  };

  return (
    <div>
     
      <form className="form">
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
