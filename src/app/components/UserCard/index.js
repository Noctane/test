import React from 'react';
import PropTypes from 'prop-types';

function UserCard({ user, onClickBtn }) {
  return (
    <li>
      <div className="card mb-2">
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <h6 className="card-subtitle text-muted">{user.company.name} - {user.address.city}</h6>
          <a href={`mailto:${user.email}`}>{user.email}</a>
          <div className="text-right">
            <button type="button" onClick={onClickBtn} className="btn btn-danger">Supprimer</button>
          </div>
        </div>
      </div>
    </li>
  )
}

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserCard;