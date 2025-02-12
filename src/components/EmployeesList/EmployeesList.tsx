import styles from './EmployeesList.module.css';
import { Employee } from '../../types'; 
import { useNavigate } from 'react-router-dom';
import {monthMap} from '../../const';

interface EmployeeListProps {
  employees: Employee[];
}

const EmployeeList = ({ employees }: EmployeeListProps) => {
  const navigate = useNavigate(); 

  const handleRowClick = (id: number) => {
    navigate(`/profile/${id.toString()}`); 
  };

  const formatDateWithMonthName = (date: string) => {
    const [day, month, year] = date.split(' ');

    const monthNumber = monthMap[month.toLowerCase()];

    if (monthNumber) {
      return `${day}.${monthNumber}.${year}`;
    } else {
      return date; 
    }
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <div className={styles.fullName}>ФИО</div>
        <div className={styles.position}>Должность</div>
        <div className={styles.phone}>Телефон</div>
        <div className={styles.birthDate}>Дата рождения</div>
      </div>
      {employees.map(employee => (
        <div
          key={employee.id}
          className={styles.dataRow}
          onClick={() => handleRowClick(employee.id)} 
        >
          <div className={styles.fullName}>{employee.name}</div>
          <div className={styles.position}>{employee.position}</div>
          <div className={styles.phone}>{employee.phone}</div>
          <div className={styles.birthDate}>{formatDateWithMonthName(employee.birthdate)}</div>
        </div>
      ))}
    </div>
  );
};


export default EmployeeList;
