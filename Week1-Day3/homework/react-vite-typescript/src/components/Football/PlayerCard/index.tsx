import styles from './PlayerCard.module.css';
import { EyeOff } from 'lucide-react';

type PlayerCardProps = {
    Name? : string;
    Visa? : string;
}

const PlayerCard = ({Name, Visa} : PlayerCardProps) => {
    return (
        <div className={styles.playerCard}>
            <div className={styles.row}>
                <span className={styles.name}>{Name}</span>
            </div>
            <div className={styles.row}>
                <span style={{color:'blue', fontWeight:'bold'}}>VISA</span>
                <span className={styles.visaNumber}>{Visa}</span>
                <EyeOff />
            </div>
        </div>
    );
}

export default PlayerCard;