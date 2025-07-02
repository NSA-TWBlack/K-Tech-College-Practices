import styles from './StoreCard.module.css';

type StoreCardProps = {
  logo?: string; // đổi sang string (src ảnh)
  name: string;
  desc?: string;
  amount: string | number;
  time?: string;
};

const StoreCard = ({ logo, name, desc, amount, time }: StoreCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <div className={styles.logo}>
          {logo && <img src={logo} alt="logo" style={{ width: 24, height: 24 }} />}
        </div>
        <div className={styles.info}>
          <span className={styles.name}>{name}</span>
          {desc && <span className={styles.desc}>{desc}</span>}
        </div>
      </div>
      <div className={styles.right}>
        <span className={styles.amount}>{amount}</span>
        {time && <span className={styles.time}>{time}</span>}
      </div>
    </div>
  );
};

export default StoreCard;