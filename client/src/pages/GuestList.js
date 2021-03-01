import React from 'react';
import { useQuery } from 'react-query';
import { getData } from '../api';

const GuestList = () => {
  const { data, isLoading, isError, error } = useQuery('guests', getData);

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Guest List</h1>
      {data.map((guest) => (
        <li key={guest._id}>{guest.name}</li>
      ))}
    </div>
  );
};

export default GuestList;
