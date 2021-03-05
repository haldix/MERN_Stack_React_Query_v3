import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Guest.scss';
import useDelete from '../hooks/useDelete';
const random = () => Math.floor(Math.random() * 20);

const Guest = ({ guest, i }) => {
  const { handleDelete, isLoading } = useDelete();

  return (
    <div className='guest'>
      <img src={`https://i.pravatar.cc/300?img=${random()}`} alt={guest.name} />
      <div className='guest-info'>
        <p className='guest-name'>{guest.name}</p>
        <p className='guest-email'>{guest.email}</p>
        <p className='guest-occupation'>{guest.occupation}</p>
        <p className='guest-city'>{guest.city}</p>
        <div className='edit-cont'>
          <Link to={`/update/${guest._id}`}>Update</Link>
          <button id={guest._id} onClick={handleDelete}>
            {isLoading ? 'Deleteing Guest...' : 'Remove Guest'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Guest;
