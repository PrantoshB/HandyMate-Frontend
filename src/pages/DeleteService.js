import React ,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchServices } from '../store/ServicesSlice';
import DeleteServicesCard from '../components/DeleteServiceCard';


const DeleteServices = () => {
    const dispatch = useDispatch();
  const services = useSelector((state) => state.services.services);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);
    return (
        <div className='container'>
            <h1>Delete Services</h1>
            {services.map((service) => (
          <div className='row' key={service.id}>
           
              <DeleteServicesCard
              key={service.id}
              name={service.name}
              image={service.image}
              details={service.details}
            />
            
          </div>
        ))}
        </div>
    )
}

export default DeleteServices;
