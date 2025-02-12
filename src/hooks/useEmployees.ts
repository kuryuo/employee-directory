import { useEffect, useState } from 'react';
import { fetchEmployeesApi } from '../api/employeeApi';
import { Employee } from '../types';

export const useEmployees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const data = await fetchEmployeesApi();
        setEmployees(data);
      } catch {
        setError('Ошибка загрузки сотрудников');
      } finally {
        setLoading(false);
      }
    };

    getEmployees();
  }, []);

  return { employees, loading, error };
};
