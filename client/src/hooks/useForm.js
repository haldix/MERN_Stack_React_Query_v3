import { useState } from 'react';

const useForm = (initData, submitFn) => {
  const [data, setData] = useState(initData);

  const handleChange = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    submitFn(data);
    setData(initData);
  };

  return { handleChange, data, handleSubmit };
};

export default useForm;
