import styles from "./HomePage.module.css";

export default function HomePage() {
  const base = process.env.GITHUB_PAGES ? '/HarukiSakai_Portfolio/' : './';
  return (
    <>
        <div className={styles.container} >
        <h1>Haruki Sakai のポートフォリオサイト</h1>
        <img src={`${base}31411.png`} alt="icon" />
        </div>
    </>
  )
}
