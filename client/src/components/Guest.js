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
        <details>
          <summary>Edit Profile</summary>
          <div className='edit-btns-cont'>
            <Link to={`/update/${guest._id}`}>Update Data</Link>
            <button onClick={toggleModal}>Edit Photo</button>
            <button id={guest._id} onClick={handleDelete}>
              {isLoading ? 'Deleteing...' : 'Remove Guest'}
            </button>
          </div>
        </details>
      </div>
      <PhotoModal isOpen={isOpen} toggleModal={toggleModal} id={guest._id} />
    </>
  );
};

export default Guest;
