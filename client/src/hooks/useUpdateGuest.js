import { updateData } from '../api';
import { useMutation, useQueryClient } from 'react-query';
import { useHistory } from 'react-router-dom';

export default function useUpdateGuest() {
  const queryClient = useQueryClient();
  const history = useHistory();

  const { mutateAsync, isLoading, isError, error } = useMutation(updateData);

  const submitFn = async (data) => {
    const id = data._id;
    await mutateAsync(
      { ...data, id },
      {
        onMutate: (newGuest) => {
          queryClient.setQueryData(['guests', newGuest._id], newGuest);
        },
      },
      {
        onSuccess: (newGuest) => {
          console.log('newGuest', newGuest);
          queryClient.setQueryData(['guests', newGuest._id], newGuest);
          queryClient.invalidateQueries('guests');
        },
      }
    );
    history.push('/');
  };

  return { submitFn, isLoading, isError, error };
}
