import styles from './Forecast.module.css';

type ForecastItem = {
  day: string;
  icon: React.ReactNode;
  time?: string;
  selected?: boolean;
};

type ForecastProps = {
  title?: string;
  subtitle?: string;
  items: ForecastItem[];
  showTime?: boolean;
  rightIcon?: React.ReactNode;
};

const Forecast = ({ title, subtitle, items, showTime = false, rightIcon }: ForecastProps) => {
  return (
    <div className={styles.card}>
      {(title || subtitle || rightIcon) && (
        <div className={styles.header}>
          <div>
            {title && <div className={styles.title}>{title}</div>}
            {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
          </div>
          {rightIcon && <div className={styles.rightIcon}>{rightIcon}</div>}
        </div>
      )}
      <div className={styles.list}>
        {items.map((item) => (
          <div
            key={item.day}
            className={`${styles.item} ${item.selected ? styles.selected : ''}`}
          >
            <div className={styles.icon}>{item.icon}</div>
            <div className={styles.day}>{item.day}</div>
            {showTime && <div className={styles.time}>{item.time}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;