import styles from './EmployeeCard.module.css';
import { Employee } from '../../types';

interface EmployeeCardProps {
  employee: Employee;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <div className={styles.avatarContainer}>
          <img src={employee.photo} alt={employee.name} className={styles.avatar} />
        </div>
        <div className={styles.infoContainer}>
          <h2 className={styles.name}>{employee.name}</h2>
          <p className={styles.position}>{employee.position}</p>
          <div className={styles.techStack}>
            {employee.stack.map((tech, index) => (
              <span key={index} className={styles.tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.mainInfo}>
        <h3 className={styles.infoTitle}>Основная информация</h3>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Контактный телефон:</span>
          <span className={styles.infoValue}>{employee.phone}</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Дата рождения:</span>
          <span className={styles.infoValue}>{employee.birthdate}</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Дата устройства:</span>
          <span className={styles.infoValue}>{employee.dateOfEmployment}</span>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
