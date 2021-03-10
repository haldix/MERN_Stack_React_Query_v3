import React from 'react';
import { useHistory } from 'react-router-dom';
import Form from '../components/Form';
import { postData } from '../api';
import { useMutation } from 'react-query';

const initData = { name: '', email: '', city: '', occupation: '' };

const CreateGuest = () => {
  const { mutateAsync, isLoading, isError, error } = useMutation((formData) =>
    postData(formData)
  );

  const history = useHistory();

  const submitFn = async (data) => {
    await mutateAsync(data);
    history.push('/');
  };

  return (
    <div>
      <>
        <h1>Create New Guest</h1>
        <Form initData={initData} submitFn={submitFn} isLoading={isLoading} />
      </>
    </div>
  );
};

export default CreateGuest;
