
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
  }

  handleNameInputChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleNumberInputChange = (event) => {
    this.setState({ number: event.target.value });
  };

  handleSubmitForm = (event) => {
    event.preventDefault();

    const { name, number } = this.state;

    // Name and number validation
    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter a valid name and phone number.');
      return;
    }

    this.props.handleSubmit(name, number);

    // Reset form fields
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={styles.container} onSubmit={this.handleSubmitForm}>
        <div className={styles.inputContainer}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
            value={name}
            onChange={this.handleNameInputChange}
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
            onChange={this.handleNumberInputChange}
          />
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit">Add Contact</button>
        </div>
      </form>
    );
  }
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ContactForm;


