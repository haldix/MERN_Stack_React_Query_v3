import React from 'react';

import './styles/Form.scss';
import useForm from '../hooks/useForm';

const defData = { name: '', email: '', city: '', occupation: '' };

const Form = ({ initData = defData, submitFn }) => {
  const { data, handleSubmit, handleChange } = useForm(initData, submitFn);

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
