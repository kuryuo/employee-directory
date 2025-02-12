import { Link } from 'react-router-dom';
import styles from './Breadcrumbs.module.css';

interface BreadcrumbsProps {
  crumbs: { label: string, path: string }[];
}

const Breadcrumbs = ({ crumbs }: BreadcrumbsProps) => {
  return (
    <nav className={styles.breadcrumbs}>
      {crumbs.map((crumb, index) => (
        <span key={index}>
          <Link to={crumb.path} className={styles.crumb}>
            {crumb.label}
          </Link>
          {index < crumbs.length - 1 && <span className={styles.separator}> &gt; </span>}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
