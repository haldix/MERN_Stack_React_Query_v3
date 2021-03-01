import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { postData } from '../api';
import { useMutation } from 'react-query';
import './styles/Form.scss';

const initData = { name: '', email: '', city: '', occupation: '' };

const Form = () => {
  const [data, setData] = useState(initData);
  const history = useHistory();
  const mutation = useMutation((formData) => postData(formData));

  const handleChange = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutation.mutateAsync(data);
    setData(initData);
    history.push('/');
  };

  return (
    <form className='guest-form' onSubmit={handleSubmit}>
      <div className='input-group'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          name='name'
          onChange={handleChange}
          value={data.name}
        />
      </div>
      <div className='input-group'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          name='email'
          onChange={handleChange}
          value={data.email}
        />
      </div>
      <div className='input-group'>
        <label htmlFor='city'>City</label>
        <input
          type='text'
          id='city'
          name='city'
          onChange={handleChange}
          value={data.city}
        />
      </div>
      <div className='input-group'>
        <label htmlFor='occupation'>Occupation</label>
        <input
          type='text'
          id='occupation'
          name='occupation'
          onChange={handleChange}
          value={data.occupation}
        />
      </div>
      <div className='input-group'>
        <input type='submit' value='Submit' />
      </div>
    </form>
  );
};

export default Form;
