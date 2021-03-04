import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getOneData, updateData } from '../api';
import { useQuery, useMutation } from 'react-query';
import Form from '../components/Form';

const UpdateGuest = () => {
  const history = useHistory();

  // Get guest data by id to set as init val in form
  const { id } = useParams();

  const { data: userData, error, isLoading, isError } = useQuery(
    ['guest', { id }],
    getOneData,
    { onSucces: console.log('Success') }
  );

  // pass mutation logic to form
  const {
    mutateAsync,
    isLoading: isMutLoading,
    isError: isMutError,
  } = useMutation(updateData);

  const submitFn = async (data) => {
    await mutateAsync({ ...data, id });
    history.push('/');
  };

  if (isError || isMutError) {
    return <div>Error: {error?.message}</div>;
  }
  if (isLoading || isMutLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Update Guest</h1>
      <Form initData={userData} submitFn={submitFn} />
    </>
  );
};

export default UpdateGuest;
