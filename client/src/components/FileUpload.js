import React, { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import { uploadPhoto, updateData } from '../api';
import './styles/FileUpload.scss';

const FileUpload = ({ id, toggleModal }) => {
  const [file, setFile] = useState('');
  const [uploadedFile, setUploadedFile] = useState({});

  const { mutateAsync, isLoading, data, isSuccess } = useMutation((formData) =>
    uploadPhoto(formData)
  );

  const {
    mutateAsync: mutateUpdate,
    isError: isUpdateError,
    error: updateError,
  } = useMutation(updateData);

  const onChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('file', file);
    // console.log(Array.from(fd));

    try {
      await mutateAsync(fd, {
        onSuccess: console.log('Success Photo Upload', data),
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (data) {
      const { fileName, filePath } = data;
      setUploadedFile({ fileName, filePath });
    }
  }, [data]);

  useEffect(() => {
    if (uploadedFile) {
      mutateUpdate({ id, photo_url: uploadedFile.filePath });
    }
  }, [uploadedFile, mutateUpdate, id]);

  return (
    <div className='file-upload'>
      <button className='btn-modal-close' onClick={toggleModal}>
        X
      </button>
      <form onSubmit={onSubmit}>
        <input
          type='file'
          className='custom-file-input'
          id='customFile'
          onChange={onChange}
        />
        <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
        />
      </form>
      <div className='image-preview-cont'>
        {!file && (
          <span className='image-preview-text'>Preview Selected Image</span>
        )}
        {file ? (
          <>
            <img
              className='image-preview'
              src={URL.createObjectURL(file)}
              alt={file.name}
            />
            <h3 className='image-title'>{file.name}</h3>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default FileUpload;
