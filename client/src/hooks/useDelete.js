import { useMutation, useQueryClient } from 'react-query';
import { deleteData } from '../api';

const useDelete = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isError, error } = useMutation(deleteData, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries('guests');
    },
  });

  const handleDelete = async (e) => {
    await mutateAsync(e.target.id);
  };

  return { handleDelete, isError, error };
};

export default useDelete;
