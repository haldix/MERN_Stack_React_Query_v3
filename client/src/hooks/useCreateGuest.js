import { useMutation } from 'react-query';
import { postData } from '../api';
import { useHistory } from 'react-router-dom';

export default function useCreateGuest() {
  const { mutateAsync, isLoading, isError, error } = useMutation((formData) =>
    postData(formData)
  );

  const history = useHistory();

  const submitFn = async (data) => {
    await mutateAsync(data);
    history.push('/');
  };

  return { submitFn, isLoading, isError, error };
}
