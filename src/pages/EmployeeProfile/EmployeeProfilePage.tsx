import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import EmployeeCard from '../../components/EmployeeCard/EmployeeCard';
import { useEmployee } from '../../hooks/useEmployee';

const EmployeeProfile = () => {
  const { id } = useParams<{ id: string }>();
  const { employee, loading, error } = useEmployee(id);

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
