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
        <div className="card-content">
          <h2 className="card-title">{projectName}</h2>
          <p className="card-description">
            {`経験年数: ${year}年 ${month}ヶ月`}
          </p>
          {buttonText && (
            <button onClick={onButtonClick} className="card-button">
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </>
  );
}
