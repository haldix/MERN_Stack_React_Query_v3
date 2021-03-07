import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getOneData, updateData } from '../api';
import { useQuery, useMutation } from 'react-query';
import Form from '../components/Form';

const UpdateGuest = () => {
  const history = useHistory();

  // get existing guest data by id to set as init val in form
  const { id } = useParams();

  const { data: userData, error, isLoading, isError } = useQuery(
    ['guest', { id }],
    getOneData,
    { onSucces: console.log('Success updating guest') }
  );

  // mutation logic to be passed to form
  const { mutateAsync, isLoading: isMutLoading } = useMutation(updateData);

  const submitFn = async (data) => {
    await mutateAsync({ ...data, id });
    history.push('/');
  };

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Update Guest</h1>
      <Form initData={userData} submitFn={submitFn} isLoading={isMutLoading} />
    </>
  );
};

export default UpdateGuest;
