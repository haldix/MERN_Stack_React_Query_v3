import React, { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import { uploadPhoto, updateData } from '../api';

const FileUpload = ({ id }) => {
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
    <>
      <form onSubmit={onSubmit}>
        <div className='custom-file mb-4'>
          <input
            type='file'
            className='custom-file-input'
            id='customFile'
            onChange={onChange}
          />
        </div>

        <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
        />
      </form>
      {file ? (
        <div className='row mt-5'>
          <div className='col-md-6 m-auto'>
            {<h3 className='text-center'>{uploadedFile.fileName}</h3>}
            <img
              style={{ width: '100%' }}
              src={URL.createObjectURL(file)}
              alt=''
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default FileUpload;
