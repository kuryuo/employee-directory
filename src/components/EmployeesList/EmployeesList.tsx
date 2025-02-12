import styles from './EmployeesList.module.css';

const employees = [
  {
    id: 1,
    fullName: 'Иванов Иван Иванович',
    position: 'Frontend Developer',
    phone: '+7 912 345 67 89',
    birthDate: '01.01.1990'
  },
  {
    id: 2,
    fullName: 'Петров Петр Петрович',
    position: 'Backend Developer',
    phone: '+7 912 987 65 43',
    birthDate: '12.05.1985'
  },
  {
    id: 3,
    fullName: 'Сидорова Анна Сергеевна',
    position: 'UI/UX Designer',
    phone: '+7 912 654 32 10',
    birthDate: '23.09.1992'
  }
];

const EmployeeList = () => {
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
          <div className={styles.fullName}>{employee.fullName}</div>
          <div className={styles.position}>{employee.position}</div>
          <div className={styles.phone}>{employee.phone}</div>
          <div className={styles.birthDate}>{employee.birthDate}</div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
