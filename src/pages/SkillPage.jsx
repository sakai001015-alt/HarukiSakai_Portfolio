import skillData from "../components/data/skill";
import SkillCard from "../components/card/SkillCard";
import styles from "./SkillPage.module.css";

export default function SkillPage() {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.title}>SkillPage</div>
        <div className={styles.display}>
      {skillData.map((skill) => (
        <SkillCard
          name={skill.name}
          level={skill.level}
          detail={skill.detail}
        />
      ))}
      </div>
    </div>
  );
}

