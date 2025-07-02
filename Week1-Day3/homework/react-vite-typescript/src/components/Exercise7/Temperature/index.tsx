import styles from './Temperature.module.css';

type TemperatureCardProps = {
  city: string;
  weather: string;
  temperature: number | string;
  icon: React.ReactNode;
  background?: string;
};

const TemperatureCard = ({
  city,
  weather,
  temperature,
  icon,
  background = 'linear-gradient(90deg, #ff512f 0%, #dd2476 100%)',
}: TemperatureCardProps) => {
  return (
    <div className={styles.card} style={{ background }}>
      <div className={styles.left}>
        <div className={styles.city}>{city}</div>
        <div className={styles.weather}>{weather}</div>
      </div>
      <div className={styles.center}>
        <span className={styles.temp}>{temperature}°</span>
      </div>
      <div className={styles.right}>
        {icon}
      </div>
    </div>
  );
};

export default TemperatureCard;