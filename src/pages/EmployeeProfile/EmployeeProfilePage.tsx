import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import EmployeeCard from '../../components/EmployeeCard/EmployeeCard';
import { useEmployee } from '../../hooks/useEmployee'; 
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

const EmployeeProfilePage = () => {
  const { id } = useParams<{ id: string }>(); 
  const { employee, loading, error } = useEmployee(id); 

  const crumbs = [
    { label: 'Главная', path: '/' },
    { label: 'Список сотрудников', path: '/' },
    { label: employee?.name || 'Загрузка...', path: `/profile/${id}` }, 
  ];

  if (loading) return <p>Загрузка данных...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Header />
      <Breadcrumbs crumbs={crumbs} />
      {employee && <EmployeeCard employee={employee} />} 
    </div>
  );
};

export default EmployeeProfilePage;
