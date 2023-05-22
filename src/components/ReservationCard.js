import React from 'react';
import PropTypes from 'prop-types';

const ReservationCard = ({
  startDate, endDate, userName, serviceName, locationName,
}) => (
  <div style={{ border: '1px solid black', borderRadius: '4px', padding: '16px' }}>
    <h1>
      Reservation for:
      {' '}
      {serviceName}
    </h1>
    <h2>
      Reserved for:
      {' '}

      {userName}
    </h2>
    <h2>
      Start Date:
      {' '}
      {startDate}
    </h2>
    <h2>
      End Date:
      {' '}
      {endDate}
    </h2>
    <h2>
      Location:
      {' '}
      {locationName}
    </h2>
    <button type="button">Cancel Reservation</button>
  </div>
);

export default ReservationCard;

ReservationCard.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  serviceName: PropTypes.string.isRequired,
  locationName: PropTypes.string.isRequired,
};
