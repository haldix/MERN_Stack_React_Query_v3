import React from 'react';
import Modal from 'react-modal';
import FileUpload from './FileUpload';

Modal.setAppElement('#root');

const PhotoModal = ({ isOpen, toggleModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      contentLabel='Edit Photo Modal'
      closeTimeoutMS={500}
    >
      <h2>Upload modal</h2>
      <FileUpload />
    </Modal>
  );
};

export default PhotoModal;