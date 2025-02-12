import { useState, useEffect } from 'react';
import { fetchEmployeeApi } from '../api/employeeApi';
import { Employee } from '../types';

export const useEmployee = (id: string | undefined) => {
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getEmployee = async () => {
      if (id) {
        try {
          const data = await fetchEmployeeApi(id);
          setEmployee(data);
        } catch {
          setError('Ошибка загрузки данных сотрудника');
        } finally {
          setLoading(false);
        }
      }
    };

    getEmployee();
  }, [id]);

  return { employee, loading, error };
};
