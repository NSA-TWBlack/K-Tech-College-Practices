import styles from './WeatherButton.module.css';

type WeatherButtonProps = {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  background?: string;
  rightIcon?: React.ReactNode;
  titleColor?: string;
  subtitleColor?: string;
};

const WeatherButton = ({
  icon,
  title,
  subtitle,
  background = '#fff',
  rightIcon,
  titleColor = '#000',
  subtitleColor = '#7b8a99',
}: WeatherButtonProps) => {
  return (
    <div className={styles.card} style={{ background }}>
      <div className={styles.left}>
        <div className={styles.icon}>{icon}</div>
        <div>
          <div className={styles.title} style={{ color: titleColor }}>{title}</div>
          {subtitle && <div className={styles.subtitle} style={{ color: subtitleColor }}>{subtitle}</div>}
        </div>
      </div>
      {rightIcon && <div className={styles.rightIcon}>{rightIcon}</div>}
    </div>
  );
};

export default WeatherButton;