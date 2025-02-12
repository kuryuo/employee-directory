import Header from '../../components/Header/Header';
import Filters from '../../components/Filter/Filter';
import EmployeeList from '../../components/EmployeesList/EmployeesList';

const EmployeePage = () => {
  return (
    <div>
      <Header />
      <Filters />
      <EmployeeList />
    </div>
  );
};

export default EmployeePage;
