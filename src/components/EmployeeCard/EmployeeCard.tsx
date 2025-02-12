import styles from './EmployeeCard.module.css';

const EmployeeCard = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <div className={styles.avatarContainer}>
          <div className={styles.avatar}></div>
        </div>
        <div className={styles.infoContainer}>
          <h2 className={styles.name}>Иванов Иван Иванович</h2>
          <p className={styles.position}>Frontend-разработчик</p>
          <div className={styles.techStack}>
            <span className={styles.tech}>React</span>
            <span className={styles.tech}>Node.js</span>
            <span className={styles.tech}>TypeScript</span>
          </div>
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.mainInfo}>
        <h3 className={styles.infoTitle}>Основная информация</h3>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Контактный телефон:</span>
          <span className={styles.infoValue}>+7 123 456-78-90</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Дата рождения:</span>
          <span className={styles.infoValue}>01.01.1990</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Дата устройства:</span>
          <span className={styles.infoValue}>01.06.2020</span>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
