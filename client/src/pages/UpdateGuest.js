import React from 'react';
import { useParams } from 'react-router-dom';
// import { useQueryClient } from 'react-query';
import Form from '../components/Form';
import useGuest from '../hooks/useGuest';
import useUpdateGuest from '../hooks/useUpdateGuest';

const UpdateGuest = () => {
  // get existing guest data by id to set as init val in form
  const { id } = useParams();
  const { data: userData, error, isLoading, isError } = useGuest(id);

  // mutation logic to be passed to form to be used when updated guest is submitted
  const {
    submitFn,
    isLoading: isMutating,
    isError: isMutError,
    error: mutError,
  } = useUpdateGuest();

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Update Guest</h1>
      <Form initData={userData} submitFn={submitFn} isLoading={isMutating} />
    </>
  );
};

export default UpdateGuest;
