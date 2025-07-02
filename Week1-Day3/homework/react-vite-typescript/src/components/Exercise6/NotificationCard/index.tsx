import styles from './NotificationCard.module.css';
import { Bell } from 'lucide-react';

type NotificationCardProps = {
  message: string;
  count: number;
};

const NotificationCard = ({ message, count }: NotificationCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        {message}
      </div>
      <div className={styles.right}>
        <div className={styles.divider}></div>
        <span className={styles.icon}><Bell size={24} /></span>
        <span className={styles.badge}>{count}</span>
      </div>
    </div>
  );
};

export default NotificationCard;