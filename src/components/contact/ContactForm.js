import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

const ContactForm = ({ handleSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameInputChange = event => {
    setName(event.target.value);
  };

  const handleNumberInputChange = event => {
    setNumber(event.target.value);
  };

  const handleSubmitForm = event => {
    event.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter a valid name and phone number.');
      return;
    }

    handleSubmit(name, number);

    setName('');
    setNumber('');
  };

  return (
    <form className={styles.container} onSubmit={handleSubmitForm}>
      <div className={styles.inputContainer}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
          value={name}
          onChange={handleNameInputChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="number">Number</label>
        <input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleNumberInputChange}
        />
      </div>
      <div className={styles.buttonContainer}>
        <button type="submit">Add Contact</button>
      </div>
    </form>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
