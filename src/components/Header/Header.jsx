import { Link } from "react-router-dom";
import styles from "./Header.module.css"

const APP_NAME = "HarukiSakai_Portfolio";
export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.sitename}>Haruki Sakai's Portfolio</div>
        <nav>
          <ul className={styles.nav_links}>
            <li>
              <Link to={APP_NAME + '/'}>Home</Link>
            </li>
            <li>
              <Link to={APP_NAME + '/about'}>AboutMe</Link>
            </li>
            <li>
              <Link to={APP_NAME + '/career'}>Career</Link>
            </li>
            <li>
              <Link to={APP_NAME + '/skill'}>Skill</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}