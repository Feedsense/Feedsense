import React, {useState} from 'react';
import uploadFile from './uploadFile.js';

// Request configuration for file and form uploading
const config = {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
};

// Creating the modal that will be displayed
const Modal = ({show}) => {
  const [videoTitle, setVideoTitle] = useState('');
  const [videoDesc, setVideoDesc] = useState('');
  const [videoTags, setVideoTags] = useState('');
  const [videoFile, setVideoFile] = useState(null);

  const handleChange = (event) => {
    if (event.target.id === 'title') {
      setVideoTitle(event.target.value);
    } else if (event.target.id === 'description') {
      setVideoDesc(event.target.value);
    } else if (event.target.id === 'tags') {
      setVideoTags(event.target.value);
    }
  }

  const handleFileInput = (event) => {
    const file = event.target.files[0];
    //limiting the file size for to 1Mb now
    if (file) {
      setVideoFile(file);
    } else {
      console.log('ERROR FILE IS TOO LARGE');
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    var formData = new FormData();
    formData.append('title', videoTitle);
    formData.append('description', videoDesc);
    formData.append('tags', videoTags);
    formData.append('video', videoFile);

    uploadFile(formData, config);
  }

  return (
    <React.Fragment>
      <div className="modal-overlay"/>
      <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className="modal">
          <div className="modal-header">
            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close"
              onClick={()=>{show(false)}}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <h2>Twitter</h2>
            <h2>Youtube</h2>
            <label>Title</label>
            <input id="title" type="text" placeholder="Example Title" onChange={handleChange}></input>
            <label>Description</label>
            <input id="description" type="text" placeholder="Write your description of the video here..."
              onChange={handleChange}></input>
            <label>Tags</label>
            <input id="tags" type="text" placeholder="Separate your tags by comma here..."
              onChange={handleChange}></input>
            <label>Upload Video</label>
            <input id="video" type="file" accept="video/*" onChange={handleFileInput}></input>
            <button>Send Post</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Modal;