import { useState } from 'react';
import styles from './Filter.module.css';

const Filters = () => {
  const [openFilter, setOpenFilter] = useState<number | null>(null);

  const toggleFilter = (index: number) => {
    setOpenFilter(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.filtersContainer}>
        <h1 className={styles.title}>Список сотрудников</h1>
        <div className={styles.filterWrapper}>
          <div className={styles.filter}>
            <span 
              className={styles.filterTitle} 
              onClick={() => toggleFilter(0)}
            >
              Должность
            </span>
            <div 
              className={`${styles.arrow} ${openFilter === 0 ? styles.openArrow : ''}`}
            ></div>
            <div 
              className={`${styles.dropdown} ${openFilter === 0 ? styles.open : ''}`}
            >
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
            <span 
              className={styles.filterTitle} 
              onClick={() => toggleFilter(1)}
            >
              Пол
            </span>
            <div 
              className={`${styles.arrow} ${openFilter === 1 ? styles.openArrow : ''}`}
            ></div>
            <div 
              className={`${styles.dropdown} ${openFilter === 1 ? styles.open : ''}`}
            >
              <label>
                Женский <input type="checkbox" />
              </label>
              <label>
                Мужской <input type="checkbox" />
              </label>
            </div>
          </div>

          <div className={styles.filter}>
            <span 
              className={styles.filterTitle} 
              onClick={() => toggleFilter(2)}
            >
              Стек технологий
            </span>
            <div 
              className={`${styles.arrow} ${openFilter === 2 ? styles.openArrow : ''}`}
            ></div>
            <div 
              className={`${styles.dropdown} ${openFilter === 2 ? styles.open : ''}`}
            >
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
          <button className={styles.removeFilterBtn}>×</button>
            <span>Дизайнер</span>
          </div>
          <div className={styles.selectedFilter}>
          <button className={styles.removeFilterBtn}>×</button>
            <span>Мужской</span>
          </div>
          <div className={styles.selectedFilter}>
          <button className={styles.removeFilterBtn}>×</button>
            <span>React</span>
          </div>
        </div>
        <button className={styles.searchBtn}>Найти</button>
      </div>
    </div>
  );
};

export default Filters;
