import axios from "axios";

const API_URL = "https://frontend-test-api.stk8s.66bit.ru/api/Employee";

const fetchData = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

export const fetchEmployeesApi = async (page: number, count: number) => {
  return fetchData(`${API_URL}?Page=${page}&Count=${count}`);
};

export const fetchEmployeeApi = async (id: string) => {
  return fetchData(`${API_URL}/${id}`);
};
