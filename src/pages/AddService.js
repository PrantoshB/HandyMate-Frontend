import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addService } from '../store/ServicesSlice';
import { storage } from '../firebaseConfig';
import AddServiceIcon from '../assets/images/add-service-icon5.png';

const AddService = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [details, setDetails] = useState('');
  const [duration, setDuration] = useState('');
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
          setDuration('');
          setIsUploading(false);
          setUploadSuccess(true);
          navigate('/');
        });
      },
    );
  };

  return (
    <div className="col-md-10 container add-service-div">
      <div>
      <div className='d-sm-inline-flex align-items-center my-4'>
      <img src={AddServiceIcon} className='img-thumbnail add-service-icon' />
      <h1 className='mx-3'>Service</h1>
      </div>
      </div>

    <form className="row g-3">
    <div className='col-md-12'>
        <input type="text" placeholder="Service Type" className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div className='input-group col-md-12'>
      <span class="input-group-text add-price-input">$</span>
        <input type="float" placeholder="Service Charge" className='form-control' arial-label='Dollar amount (with dot and two decimal palces)' value={price} onChange={(e) => setPrice(e.target.value)} />
        <span class="input-group-text add-price-input">.00</span>
      </div>
      <div className='col-md-12'>
        <input type="textarea" placeholder="Details" className='form-control' value={details} onChange={(e) => setDetails(e.target.value)} />
     </div>
     <div className='col-md-12'>
        <input type="file"  className='form-control' id='inputGroupFile02' onChange={handleFileChange} />
     </div>
     <div className='col-md-12'>
        <input type="number" placeholder="Duration" className='form-control' value={duration} onChange={(e) => setDuration(e.target.value)} />
     </div>
     <div className='col-md-12 d-flex justify-content-end g-3'>
      <button type="button" className='col-md-5 btn add-btn mx-3' onClick={handleAddClick}>Add Service</button>
      <button type="button" className='col-md-4 btn btn-outline-danger cancel-add-btn' onClick={handleAddClick}>Cancel</button>
      </div>
    

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
    </div>
  );
};

export default AddService;
