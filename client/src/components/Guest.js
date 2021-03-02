import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Guest.scss';

const Guest = ({ guest }) => {
  return (
    <div className='guest'>
      <img src='https://i.pravatar.cc/300' alt={guest.name} />
      <div className='guest-info'>
        <p className='guest-name'>{guest.name}</p>
        <p className='guest-occupation'>{guest.occupation}</p>
        <p className='guest-city'>{guest.city}</p>
        <Link to={`/update/${guest._id}`}>Update</Link>
      </div>
    </div>
  );
};

export default Guest;
