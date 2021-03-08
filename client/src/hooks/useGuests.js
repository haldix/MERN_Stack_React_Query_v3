import { useQuery } from 'react-query';
import { getAllData } from '../api';

export default function useGuests() {
  return useQuery('guests', getAllData, {
    staleTime: 5000,
  });
}
