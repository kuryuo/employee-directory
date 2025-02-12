import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import EmployeeCard from '../../components/EmployeeCard/EmployeeCard';
import { fetchEmployeeApi } from '../../api/employeeApi';

interface Employee {
  id: number;
  name: string;
  photo: string;
  phone: string;
  position: string;
  stack: string[];
  birthdate: string;
  dateOfEmployment: string;
}

const EmployeeProfile = () => {
  const { id } = useParams<{ id: string }>();
  
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

  if (loading) return <p>Загрузка данных...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Header />
      {employee && <EmployeeCard employee={employee} />}
    </div>
  );
};

export default EmployeeProfile;
