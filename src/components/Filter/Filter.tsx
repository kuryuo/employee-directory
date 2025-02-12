import styles from './Filter.module.css';

const Filters = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.filtersContainer}>
        <h1 className={styles.title}>Список сотрудников</h1>
        <div className={styles.filterWrapper}>
          <div className={styles.filter}>
            <span className={styles.filterTitle}>Должность</span>
            <div className={styles.arrow}></div>
            <div className={styles.dropdown}>
              <label>
                Дизайнер <input type="checkbox" />
              </label>
              <label>
                Аналитик <input type="checkbox" />
              </label>
              <label>
                Fullstack <input type="checkbox" />
              </label>
              <label>
                Менеджер <input type="checkbox" />
              </label>
              <label>
                Frontend-разработчик <input type="checkbox" />
              </label>
              <label>
                Backend-разработчик <input type="checkbox" />
              </label>
            </div>
          </div>

          <div className={styles.filter}>
            <span className={styles.filterTitle}>Пол</span>
            <div className={styles.arrow}></div>
            <div className={styles.dropdown}>
              <label>
                Женский <input type="checkbox" />
              </label>
              <label>
                Мужской <input type="checkbox" />
              </label>
            </div>
          </div>

          <div className={styles.filter}>
            <span className={styles.filterTitle}>Стек технологий</span>
            <div className={styles.arrow}></div>
            <div className={styles.dropdown}>
              <label>
                React <input type="checkbox" />
              </label>
              <label>
                Node.js <input type="checkbox" />
              </label>
              <label>
                TypeScript <input type="checkbox" />
              </label>
              <label>
                Python <input type="checkbox" />
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.searchContainer}>
        <input 
          type="text" 
          placeholder="Поиск сотрудников" 
          className={styles.searchInput} 
        />
      </div>

      <div className={styles.selectedFiltersContainer}>
        <span>Выбранные фильтры:</span>
        <div className={styles.selectedFilters}>
          <div className={styles.selectedFilter}>
            <span>Дизайнер</span>
            <button className={styles.removeFilterBtn}>×</button>
          </div>
          <div className={styles.selectedFilter}>
            <span>Мужской</span>
            <button className={styles.removeFilterBtn}>×</button>
          </div>
          <div className={styles.selectedFilter}>
            <span>React</span>
            <button className={styles.removeFilterBtn}>×</button>
          </div>
        </div>
        <button className={styles.searchBtn}>Найти</button>
      </div>
    </div>
  );
};

export default Filters;
