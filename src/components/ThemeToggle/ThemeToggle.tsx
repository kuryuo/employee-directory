import { useState } from 'react';
import styles from './ThemeToggle.module.css';
import lightIcon from '../../assets/light.svg';
import darkIcon from '../../assets/dark.svg';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
    // добавить логику сохранения темы в localStorage
    document.body.classList.toggle('dark-theme', !isDark);
  };

  return (
    <div className={styles.toggle} onClick={toggleTheme}>
      <div className={`${styles.switch} ${isDark ? styles.dark : ''}`}>
        <img
          src={isDark ? darkIcon : lightIcon}
          alt="theme icon"
          className={styles.icon}
        />
      </div>
    </div>
  );
};
