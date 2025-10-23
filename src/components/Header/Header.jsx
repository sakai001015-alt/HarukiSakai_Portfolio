import { Link } from "react-router-dom";
import styles from "./Header.module.css"

const APP_NAME = "HarukiSakai_Portfolio";
export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div>Haruki Sakai's Portfolio</div>
        <nav>
          <ul className={styles.nav_links}>
            <li>
              <Link to={APP_NAME + '/'}>Home</Link>
            </li>
            <li>
              <Link to="/about">AboutMe</Link>
            </li>
            <li>
              <Link to="/career">Career</Link>
            </li>
            <li>
              <Link to="/skill">Skill</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}