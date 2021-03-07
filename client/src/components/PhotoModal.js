import React from 'react';
import Modal from 'react-modal';
import FileUpload from './FileUpload';

Modal.setAppElement('#root');

const PhotoModal = ({ isOpen, toggleModal, id }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      contentLabel='Edit Photo Modal'
      closeTimeoutMS={500}
    >
      <FileUpload id={id} />
    </Modal>
  );
};

export default PhotoModal;
