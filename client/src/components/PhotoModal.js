import React from 'react';
import Modal from 'react-modal';
import FileUpload from './FileUpload';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    background: '#e4e4e4',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const PhotoModal = ({ isOpen, toggleModal, id }) => {
  return (
    <Modal
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={toggleModal}
      contentLabel='Edit Photo Modal'
      closeTimeoutMS={500}
    >
      <FileUpload id={id} toggleModal={toggleModal} />
    </Modal>
  );
};

export default PhotoModal;
