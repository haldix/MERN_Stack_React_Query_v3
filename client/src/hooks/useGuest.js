import { getOneData } from '../api';
import { useQuery, useQueryClient } from 'react-query';

export default function useGuest(id) {
  const queryClient = useQueryClient();

  return useQuery(['guest', { id }], getOneData, {
    initialData: () => {
      return queryClient.getQueryData('guests')?.find((d) => d._id === id);
    },
    initialStale: true,
  });
}
