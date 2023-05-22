import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addService } from '../store/ServicesSlice';

const AddService = () => {
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [image, setImage] = React.useState('');
  const [details, setDetails] = React.useState('');

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleAddClick = () => {
    const newService = {
      name,
      price,
      image,
      details,
    };
    dispatch(addService(newService));
    document.getElementById('name').value = '';
    document.getElementById('price').value = '';
    document.getElementById('image').value = '';
    document.getElementById('details').value = '';
    navigate('/');
  };

  return (
    <form>
      <div>
        <input type="text" placeholder="Service Name" name="name" id="name" onChange={(e) => setName(e.target.value)} />
        <input type="float" placeholder="Price" name="price" id="price" onChange={(e) => setPrice(e.target.value)} />
        <input type="file" placeholder="Image" name="image" id="image" onChange={(e) => setImage(e.target.value)} />
        <input type="textarea" placeholder="Details" name="details" id="details" onChange={(e) => setDetails(e.target.value)} />
      </div>
      <button type="button" onClick={handleAddClick}>Add Service</button>
    </form>
  );
};
export default AddService;
