import React from 'react';
import PropTypes from 'prop-types';

function Filters({ onInputChange }) {
  return (
    <form className="mb-4">
      <div className="row">
        <div className="col">
          <input type="text" onChange={onInputChange} name="name" className="form-control" placeholder="Nom" />
        </div>
        <div className="col">
          <input type="text" onChange={onInputChange} name="city" className="form-control" placeholder="Ville" />
        </div>
        <div className="col">
          <input type="text" onChange={onInputChange} name="company" className="form-control" placeholder="Compagnie" />
        </div>
      </div>
    </form>
  )
}

Filters.propTypes = {
  onInputChange: PropTypes.func.isRequired,
}

export default Filters;