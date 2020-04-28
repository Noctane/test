import React from 'react';
import PropTypes from 'prop-types';

function Modal({ isOpened, toggleModal, children }) {
  return (
    <div className={`modal fade${isOpened ? ' show' : ''}`} style={{ display: isOpened ? 'block' : 'none' }} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Ajouter un utilisateeur</h5>
            <button type="button" onClick={toggleModal} className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {children}
          </div>
          <div className="modal-footer">
            <button type="button"  onClick={toggleModal} className="btn btn-secondary" data-dismiss="modal">Annuler</button>
            <button type="button" className="btn btn-primary">Enregistrer</button>
          </div>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
}

export default Modal;