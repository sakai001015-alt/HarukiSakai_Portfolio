import styles from "./AboutMePage.module.css";

export default function AboutMePage() {
  return (
    <div className={styles.sectionContainer}>
        
        <div className={styles.title}>About Me</div>
        
        <div className={styles.detail}>
            <p className={styles.paragraph}>
                専門学校卒業後、半年ほど販売員を経験しIT業界に入りました。
            </p>
            
            <p className={styles.paragraph}>
                キャリアスタートでは、テスターや設計行程を担当し、業界の基本的な知識と経験を得ました。
            </p>
            
            <p className={styles.paragraph}>
                その後、<strong>Webサイトの開発やサーバーの構築、運用保守業務</strong>を経験。
                業種も金融、Web系、ゲーム系など、様々な分野での経験を積んでいます。
            </p>
            
            <p className={styles.paragraph}>
                これらの幅広い経験を通じて、プロジェクト全体を俯瞰し、多様な技術スタックに対応できる能力を培ってきました。
            </p>
        </div>
        
    </div>
  );
}
