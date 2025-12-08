import careerData from "../components/data/career";
import CareerCard from "../components/card/CareerCard";
import styles from "./CareerPage.module.css";

export default function CareerPage() {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.title}>CareerPage</div>
        <div className={styles.display}>
      {careerData.map((career) => (
        <CareerCard 
          projectName={career.projectName}
          year={career.year}
          month={career.month}
        />
      ))}
      </div>
    </div>
  );
}
