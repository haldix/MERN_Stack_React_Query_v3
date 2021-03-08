import React from 'react';
// import { useQuery } from 'react-query';
// import { getAllData } from '../api';
import Guest from '../components/Guest';
import './styles/GuestList.scss';
import useGuests from '../hooks/useGuests';

const GuestList = () => {
  const { isLoading, isError, error, isFetching, data: guests } = useGuests();

  if (isLoading) {
    return <h2>Loading Guests...</h2>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='guest-list'>
      <h1>Guest List</h1>
      {isFetching && <h2>Fetching...</h2>}
      <ul className='list-grid'>
        {guests.map((guest, i) => (
          <Guest key={guest._id} guest={guest} i={i} />
        ))}
      </ul>
    </div>
  );
};

export default GuestList;
