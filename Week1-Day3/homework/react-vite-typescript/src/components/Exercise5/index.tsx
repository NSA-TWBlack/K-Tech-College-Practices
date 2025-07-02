import styles from './TeamCard.module.css';

type TeamCardProps = {
  title: string;
  subtitle?: string;
  background: string;
  bold?: boolean;
};

const TeamCard = ({ title, subtitle, background, bold }: TeamCardProps) => {
  return (
    <div className={styles.card} style={{ background }}>
      <div className={styles.content}>
        <span className={bold ? styles.bold : ''}>{title}</span>
        {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      </div>
    </div>
  );
};

export default TeamCard;