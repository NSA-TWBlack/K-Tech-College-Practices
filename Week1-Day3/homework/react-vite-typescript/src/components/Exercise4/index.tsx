import styles from './InfoCard.module.css';

type InfoCardProps = {
  name: string;
  job?: string;
  icon: React.ReactNode;
};

const InfoCard = ({ name, job, icon }: InfoCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        {job && <div className={styles.job}>{job}</div>}
      </div>
      <div className={styles.icon}>{icon}</div>
    </div>
  );
};

export default InfoCard;