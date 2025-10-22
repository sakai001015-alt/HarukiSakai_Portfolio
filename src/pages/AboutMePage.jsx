import styles from "./AboutMePage.module.css";

export default function AboutMePage() {
  return (
    <>
    <div className={styles.title}>AboutMe</div>
    <div className={styles.detail}>
      専門学校卒業後、半年ほど販売員を経験しIT業界に入る。<br />
      最初はテスターや設計行程を担当し業界の基本的な知識、経験を得た<br />
      その後Webサイトの開発やサーバーの構築、運用保守業務を経験。<br />
      業種も金融、Web系、ゲーム系etc...と様々な業種を経験している
    </div>
    </>
  )
}
