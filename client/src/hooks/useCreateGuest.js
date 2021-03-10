import { useMutation, useQueryClient } from 'react-query';
import { postData } from '../api';
import { useHistory } from 'react-router-dom';

export default function useCreateGuest() {
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading, isError, error } = useMutation(
    (formData) => postData(formData),
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries('guests');
      },
    }
  );

  const history = useHistory();

  const submitFn = async (data) => {
    await mutateAsync(data);
    history.push('/');
  };

  return { submitFn, isLoading, isError, error };
}
