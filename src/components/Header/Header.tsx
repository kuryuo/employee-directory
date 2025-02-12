import styles from './Header.module.css';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import logo from '../../assets/logo.svg'; 

const Header = () => {
  return (
    <header className={styles.hdr}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" /> 
      </div>
      <div className={styles.info}>
        <span className={styles.contact}>+7 343 290 84 76</span>
        <span className={styles.contact}>info@66bit.ru</span>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
