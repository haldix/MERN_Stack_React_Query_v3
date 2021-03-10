import { useState, useEffect } from 'react';

const defData = { name: '', email: '', city: '', occupation: '' };

export default function useForm(initData, submitFn) {
  const [data, setData] = useState(defData);

  useEffect(() => {
    setData(initData);
  }, [initData]);

  const handleChange = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    submitFn(data);
    setData(initData);
  };

  return { handleChange, data, handleSubmit };
}
