import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getOneData, updateData } from '../api';
import { useQuery, useMutation } from 'react-query';

const initData = { name: '', email: '', city: '', occupation: '' };

const UpdateGuest = () => {
  const [formData, setFormData] = useState(initData);
  const history = useHistory();
  const { id } = useParams();

  const { data, error, isLoading, isError } = useQuery(
    ['guest', { id }],
    getOneData,
    { onSucces: console.log('Success') }
  );

  useEffect(() => {
    data && setFormData(data);
  }, [data]);

  const { mutateAsync, isLoading: isMutating } = useMutation(updateData);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await mutateAsync({ ...formData, id });
    setFormData(initData);
    history.push('/');
  };
  if (isError) {
    return <div>Error</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <form className='guest-form' onSubmit={handleSubmit}>
      <div className='input-group'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          name='name'
          onChange={handleChange}
          value={formData.name}
        />
      </div>
      <div className='input-group'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          name='email'
          onChange={handleChange}
          value={formData.email}
        />
      </div>
      <div className='input-group'>
        <label htmlFor='city'>City</label>
        <input
          type='text'
          id='city'
          name='city'
          onChange={handleChange}
          value={formData.city}
        />
      </div>
      <div className='input-group'>
        <label htmlFor='occupation'>Occupation</label>
        <input
          type='text'
          id='occupation'
          name='occupation'
          onChange={handleChange}
          value={formData.occupation}
        />
      </div>
      <div className='input-group'>
        <input type='submit' value='Submit' />
      </div>
      <p>{data.name}</p>
    </form>
  );
};

export default UpdateGuest;
