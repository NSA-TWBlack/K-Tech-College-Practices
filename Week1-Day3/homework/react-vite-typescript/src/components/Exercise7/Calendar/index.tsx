import styles from './Calendar.module.css';

type CalendarCardProps = {
  month: string;
  day: string | number;
  weekday: string;
  timeRange: string;
};

const CalendarCard = ({ month, day, weekday, timeRange }: CalendarCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <div className={styles.month}>{month}</div>
        <div className={styles.day}>{day}</div>
      </div>
      <div className={styles.divider} />
      <div className={styles.right}>
        <div className={styles.weekday}>{weekday}</div>
        <div className={styles.time}>{timeRange}</div>
      </div>
    </div>
  );
};

export default CalendarCard;