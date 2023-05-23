import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addService } from '../store/ServicesSlice';
import { storage } from '../firebaseConfig';

const AddService = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [details, setDetails] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleAddClick = () => {
    if (!name || !price || !image || !details) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    const allowedExtensions = /\.(jpg|jpeg|png)$/i;
    if (!allowedExtensions.test(image.name)) {
      setErrorMessage('Invalid file format');
      return;
    }

    const storageRef = storage.ref();
    const fileRef = storageRef.child(image.name);

    setIsUploading(true);
    const uploadTask = fileRef.put(image);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setUploadProgress(progress);
      },
      (error) => {
        setErrorMessage(error.message);
        setIsUploading(false);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          const newService = {
            name,
            price,
            image: downloadURL,
            details,
          };
          dispatch(addService(newService));
          setName('');
          setPrice('');
          setImage('');
          setDetails('');
          setIsUploading(false);
          setUploadSuccess(true);
          navigate('/');
        });
      },
    );
  };

  return (
    <form>
      <div>
        <input type="text" placeholder="Service Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="float" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <input type="file" placeholder="Image" onChange={handleFileChange} />
        <input type="textarea" placeholder="Details" value={details} onChange={(e) => setDetails(e.target.value)} />
      </div>
      <button type="button" onClick={handleAddClick}>Add Service</button>

      {isUploading && (
        <div>
          <p>
            Uploading:
            {uploadProgress}
            %
          </p>
        </div>
      )}

      {uploadSuccess && (
        <div>
          <p>File uploaded successfully!</p>
        </div>
      )}

      {errorMessage && (
        <div>
          <p>{errorMessage}</p>
        </div>
      )}
    </form>
  );
};

export default AddService;
