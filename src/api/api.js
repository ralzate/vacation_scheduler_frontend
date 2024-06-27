import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from 'react-query';

const apiUrl = 'http://localhost:3000'; 

const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

const fetchVacations = async () => {
  const { data } = await axiosInstance.get('/vacations');
  return data;
};

const createVacation = async (newVacation) => {
  const { data } = await axiosInstance.post('/vacations', newVacation);
  return data;
};

export const useVacations = () => {
  return useQuery('vacations', fetchVacations);
};

export const useCreateVacation = () => {
  const queryClient = useQueryClient();

  return useMutation(createVacation, {
    onSuccess: () => {
      queryClient.invalidateQueries('vacations');
    },
  });
};
