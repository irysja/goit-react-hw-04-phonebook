
import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <input
      type="text"
      value={filter}
      onChange={handleFilterChange}
      placeholder="Search contacts by name"
    />
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filter;

