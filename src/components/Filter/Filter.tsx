import { useEffect, useRef } from 'react';
import styles from './Filter.module.css';
import { POSITIONS, GENDERS, TECH_STACK } from '../../const';
import { useFilters } from '../../hooks/useFilters';

const Filters = () => {
  const { filters, updateFilters, toggleFilter, openFilter, toggleDropdown } = useFilters();
  const filtersContainerRef = useRef<HTMLDivElement | null>(null); 

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filtersContainerRef.current && !filtersContainerRef.current.contains(event.target as Node)) {
        toggleDropdown(null); 
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggleDropdown]);

  const applyFilters = () => {
    updateFilters(filters);
  };

  const renderSelectedFilters = () => {
    return Object.entries(filters).map(([category, values]) =>
      (values as string[]).map((value: string) => (
        <div key={value} className={styles.selectedFilter}>
          <button
            className={styles.removeFilterBtn}
            onClick={() => toggleFilter(category as keyof typeof filters, value)}
          >
            ×
          </button>
          <span>{value}</span>
        </div>
      ))
    );
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.filtersContainer} ref={filtersContainerRef}>
        <h1 className={styles.title}>Список сотрудников</h1>

        <div className={styles.filterWrapper}>
          <div className={styles.filter}>
            <span className={styles.filterTitle} onClick={() => toggleDropdown(0)}>
              Должность
            </span>
            <div className={`${styles.arrow} ${openFilter === 0 ? styles.openArrow : ''}`}></div>
            <div className={`${styles.dropdown} ${openFilter === 0 ? styles.open : ''}`}>
              {POSITIONS.map(position => (
                <label key={position}>
                  {position}
                  <input
                    type="checkbox"
                    checked={filters.position.includes(position)}
                    onChange={() => toggleFilter('position', position)}
                  />
                </label>
              ))}
            </div>
          </div>

          <div className={styles.filter}>
            <span className={styles.filterTitle} onClick={() => toggleDropdown(1)}>
              Пол
            </span>
            <div className={`${styles.arrow} ${openFilter === 1 ? styles.openArrow : ''}`}></div>
            <div className={`${styles.dropdown} ${openFilter === 1 ? styles.open : ''}`}>
              {GENDERS.map(gender => (
                <label key={gender}>
                  {gender}
                  <input
                    type="checkbox"
                    checked={filters.gender.includes(gender)}
                    onChange={() => toggleFilter('gender', gender)}
                  />
                </label>
              ))}
            </div>
          </div>

          <div className={styles.filter}>
            <span className={styles.filterTitle} onClick={() => toggleDropdown(2)}>
              Стек технологий
            </span>
            <div className={`${styles.arrow} ${openFilter === 2 ? styles.openArrow : ''}`}></div>
            <div className={`${styles.dropdown} ${openFilter === 2 ? styles.open : ''}`}>
              {TECH_STACK.map(tech => (
                <label key={tech}>
                  {tech}
                  <input
                    type="checkbox"
                    checked={filters.stack.includes(tech)}
                    onChange={() => toggleFilter('stack', tech)}
                  />
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.selectedFiltersContainer}>
        <span>Выбранные фильтры:</span>
        <div className={styles.selectedFilters}>{renderSelectedFilters()}</div>

        <button onClick={applyFilters} className={styles.searchBtn}>Найти</button>
      </div>
    </div>
  );
};

export default Filters;
