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
      <ul className='guest-info'>
        <li className='guest-name'>{guest.name}</li>
        <li className='guest-email'>{guest.email}</li>
        <li className='guest-occupation'>{guest.occupation}</li>
        <li className='guest-city'>{guest.city}</li>
      </ul>
      <div className='edit-cont'>
        <Link to={`/update/${guest._id}`}>Update</Link>
        <button id={guest._id} onClick={handleDelete}>
          {isLoading ? 'Deleteing...' : 'Remove'}
        </button>
      </div>
    </div>
  );
};

export default Guest;
