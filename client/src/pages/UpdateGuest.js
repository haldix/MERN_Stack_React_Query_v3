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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <>
      <h1>Update Guest</h1>
      <Form initData={userData} mutFn={useUpdateGuest} />
    </>
  );
};

export default UpdateGuest;
