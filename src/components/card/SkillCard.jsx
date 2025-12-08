import styles from "./SkillCard.module.css";

const APP_NAME = "HarukiSakai_Portfolio";
export default function SkillCard({ name, level, detail }) {
  
  return (
    
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>{name}</h2>
          <div className={styles.level_area}><img src={`./star_${level}.png`}></img></div>
          <p className={styles.description}>{detail}</p>
        </div>
      </div>
    </>
  );
}
