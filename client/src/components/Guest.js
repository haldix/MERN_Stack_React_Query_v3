import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Guest.scss';
import useDelete from '../hooks/useDelete';
import PhotoModal from './PhotoModal';
import noPhoto from '../images/no-image-available.png';

const Guest = ({ guest }) => {
  const { handleDelete, isLoading } = useDelete();
  const [isOpen, setOpen] = useState(false);

  const toggleModal = () => setOpen(!isOpen);

  return (
    <>
      <div className='guest'>
        <img
          className='guest-img'
          src={guest.photo_url || noPhoto}
          alt={guest.name}
        />
        <ul className='guest-info'>
          <li className='guest-name'>{guest.name}</li>
          <li className='guest-email'>{guest.email}</li>
          <li className='guest-occupation'>{guest.occupation}</li>
          <li className='guest-city'>{guest.city}</li>
        </ul>
        <div className='edit-cont'>
          <button onClick={toggleModal}>Edit Photo</button>
          <Link to={`/update/${guest._id}`}>Update</Link>
          <button id={guest._id} onClick={handleDelete}>
            {isLoading ? 'Deleteing...' : 'Remove'}
          </button>
        </div>
      </div>
      <PhotoModal isOpen={isOpen} toggleModal={toggleModal} id={guest._id} />
    </>
  );
};

export default Guest;
