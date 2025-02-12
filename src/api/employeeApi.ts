import axios from 'axios';

const API_URL = 'https://frontend-test-api.stk8s.66bit.ru/api/Employee';

export const fetchEmployees = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchEmployeeProfile = async (id: number) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
