import styles from './EmployeesList.module.css';
import { Employee } from '../../types'; 

interface EmployeeListProps {
  employees: Employee[];
}

const EmployeeList = ({ employees }: EmployeeListProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <div className={styles.fullName}>ФИО</div>
        <div className={styles.position}>Должность</div>
        <div className={styles.phone}>Телефон</div>
        <div className={styles.birthDate}>Дата рождения</div>
      </div>
      {employees.map(employee => (
        <div key={employee.id} className={styles.dataRow}>
          <div className={styles.fullName}>{employee.name}</div>
          <div className={styles.position}>{employee.position}</div>
          <div className={styles.phone}>{employee.phone}</div>
          <div className={styles.birthDate}>{employee.birthdate}</div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
