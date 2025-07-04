import styles from "./NewsCard.module.css";

type NewsProps = {
  imageUrl?: string;
  title?: string;
  view?: number;
};

export default function News({ imageUrl, title, view }: NewsProps) {
  return (
    <div className={styles.newsCard}>
      <img className={styles.newsImg} src={imageUrl} alt="" />
      <div className={styles.newsInfo}>
        <p className={styles.newsTitle}>{title}</p>
        <span className={styles.newsView}>{view} lượt xem</span>
      </div>
    </div>
  );
}
