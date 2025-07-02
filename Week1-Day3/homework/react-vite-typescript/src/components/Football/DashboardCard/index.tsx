import styles from './DashboardCard.module.css';
import TagButton from './TagButton';

type Tag = {
  text: string;
  background: string;
  color?: string;
};

type DashboardCardProps = {
  title: string;
  subtitle: string;
  percent: number;
  tags: Tag[];
};

function DashboardCard({ title, subtitle, percent, tags }: DashboardCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.topRow}>
        <div className={styles.tags}>
          {tags.map(tag => TagButton(tag))}
        </div>
        <span className={styles.menu}>•••</span>
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
      <div className={styles.progressBarWrapper}>
        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{ width: `${percent}%` }}
          ></div>
        </div>
        <span className={styles.percent}>{percent}%</span>
      </div>
    </div>
  );
}

export default DashboardCard;