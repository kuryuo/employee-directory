import Header from '../../components/Header/Header';
import Filters from '../../components/Filter/Filter';
import { useEmployees } from '../../hooks/useEmployees';
import EmployeeList from '../../components/EmployeesList/EmployeesList';

const EmployeeListPage = () => {
  const { employees, loading, error } = useEmployees();

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

export default EmployeeListPage;
