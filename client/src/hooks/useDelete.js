import { useMutation, useQueryClient } from 'react-query';
import { deleteData } from '../api';

const useDelete = () => {
  const { mutateAsync, isError, error } = useMutation(deleteData);
  const queryClient = useQueryClient();

  const handleDelete = async (e) => {
    await mutateAsync(e.target.id);
    queryClient.invalidateQueries('guests');
  };

  return { handleDelete, isError, error };
};

export default useDelete;
