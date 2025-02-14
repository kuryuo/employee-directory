import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../store/themeSlice';
import sunIcon from "../../assets/sun.svg";
import moonIcon from "../../assets/moon.svg";
import styles from "./ThemeToggle.module.css";
import { RootState } from '../../store/store';

export const ThemeToggle = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state: RootState) => state.theme.isDark);

  const handleToggle = () => {
    dispatch(toggleTheme()); 
  };

  return (
    <div className={styles.toggle} onClick={handleToggle}>
      <div className={`${styles.switch} ${isDark ? styles.dark : ""}`}>
        <img
          src={isDark ? moonIcon : sunIcon}
          alt="theme icon"
          className={styles.icon}
        />
      </div>
    </div>
  );
};
