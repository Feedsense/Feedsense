import axios from 'axios';

const uploadFile = (data, config) => {
  axios.post('/uploadYoutube', data, config)
    .then((res) => {
      console.log('Uploaded file successfully');
    })
    .catch((err) => {
      console.log('ERROR UPLOADING FILE ', err.stack);
    });
}

export default uploadFile;