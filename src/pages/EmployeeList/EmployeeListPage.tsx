import { Employee } from '../../types'; 
import { useEmployees } from '../../hooks/useEmployees';
import Filters from '../../components/Filter/Filter';
import Header from '../../components/Header/Header';
import EmployeeList from '../../components/EmployeesList/EmployeesList';
import { useFilters } from '../../hooks/useFilters';

const EmployeeListPage = () => {
  const { employees, loading, error } = useEmployees();
  const { filters } = useFilters();

  const filterEmployees = (employees: Employee[]) => {
    return employees.filter(employee => {
      const matchesPosition = filters.position.length === 0 || filters.position.includes(employee.position);
      const matchesGender = filters.gender.length === 0 || filters.gender.includes(employee.gender);
      const matchesStack = filters.stack.length === 0 || employee.stack.some(tech => filters.stack.includes(tech));

      return matchesPosition && matchesGender && matchesStack;
    });
  };

  if (loading) return <p>Загрузка сотрудников...</p>;
  if (error) return <p>{error}</p>;

  const filteredEmployees = filterEmployees(employees);

  return (
    <div>
      <Header />
      <Filters />
      <EmployeeList employees={filteredEmployees} />
    </div>
  );
};

export default EmployeeListPage;