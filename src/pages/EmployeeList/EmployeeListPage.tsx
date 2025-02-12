import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Filters from '../../components/Filter/Filter';
import EmployeeList from '../../components/EmployeesList/EmployeesList';
import { fetchEmployeesApi } from '../../api/employeeApi';

const EmployeesPage = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const data = await fetchEmployeesApi();
        setEmployees(data);
      }catch {
        setError('Ошибка загрузки сотрудников');
      } finally {
        setLoading(false);
      }
    };

    getEmployees();
  }, []);

  if (loading) return <p>Загрузка сотрудников...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Header />
      <Filters />
      <EmployeeList employees={employees} />
    </div>
  );
};

export default EmployeesPage;
