import React from 'react';
import { useQuery } from 'react-query';
import { getAllData } from '../api';
import Guest from '../components/Guest';

const GuestList = () => {
  const { data, isLoading, isError, error } = useQuery('guests', getAllData);

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Guest List</h1>
      <ul>
        {data.map((guest) => (
          <Guest key={guest._id} guest={guest} />
        ))}
      </ul>
    </div>
  );
};

export default GuestList;
