import React from 'react';
import ReactDOM from 'react-dom';

const config = {
  headers: {
    'Content-Type': 'multipart/form-data'
  },
  onUploadProgress: (progressEvent) => {
    var percentCompleted = Math.round(
      (progressEvent.loaded * 100) / progressEvent.total
    );
    console.log(percentCompleted);
  }
};

const handleSubmit = (event) => {
  event.preventDefault();

  const userData = new FormData(event.target);
  console.log(userData);
}

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form>
          <h2>Twitter</h2>
          <h2>Youtube</h2>
          <label>Title</label>
          <input id="title" type="text" placeholder="Example Title"></input>
          <label>Description</label>
          <input id="description" type="text" placeholder="Write your description of the video here..."></input>
          <label>Tags</label>
          <input id="tags" type="text" placeholder="Separate your tags by comma here..."></input>
          <label>Upload Video</label>
          <input id="video" type="file"></input>
        </form>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;