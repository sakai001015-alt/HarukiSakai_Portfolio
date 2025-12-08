import styles from "./CareerCard.module.css";

export default function CareerCard({
  projectName,
  year,
  month,
  buttonText,
  onButtonClick,
}) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card_content}>
          <h2 className={styles.card_title}>{projectName}</h2>
          <p className={styles.card_description}>
            {`経験年数: ${year}年 ${month}ヶ月`}
          </p>
          {buttonText && (
            <button onClick={onButtonClick} className={styles.card_button}>
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </>
  );
}
