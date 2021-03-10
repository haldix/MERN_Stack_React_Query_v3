import React from 'react';
import Form from '../components/Form';
import useCreateGuest from '../hooks/useCreateGuest';

const initData = { name: '', email: '', city: '', occupation: '' };

const CreateGuest = () => {
  return (
    <div>
      <>
        <h1>Create New Guest</h1>
        <Form initData={initData} mutFn={useCreateGuest} />
      </>
    </div>
  );
};

export default CreateGuest;
