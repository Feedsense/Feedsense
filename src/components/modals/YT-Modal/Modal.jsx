import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isYTShowing, hide }) => isYTShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p>
          Post A Video To YouTube!
        </p>
        <form>
          <label>
            Status:
            <input type="text" name="name" required/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;