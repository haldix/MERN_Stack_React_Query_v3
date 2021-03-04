import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Guest.scss';
import useDelete from '../hooks/useDelete';

const Guest = ({ guest, i }) => {
  const { handleDelete, isError, error } = useDelete();

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }
  return (
    <div className='guest'>
      {/* <img src={`https://i.pravatar.cc/300?img=${i}`} alt={guest.name} /> */}
      <div className='guest-info'>
        <p className='guest-name'>{guest.name}</p>
        <p className='guest-occupation'>{guest.occupation}</p>
        <p className='guest-city'>{guest.city}</p>
        <div className='edit-cont'>
          <Link to={`/update/${guest._id}`}>Update</Link>
          <button id={guest._id} onClick={handleDelete}>
            Delete Guest
          </button>
        </div>
      </div>
    </div>
  );
};

export default Guest;
