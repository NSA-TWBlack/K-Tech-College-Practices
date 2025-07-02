import styles from './FCCard.module.css';
import { Ellipsis } from 'lucide-react';

type FCCardProps = {
    Name? : string;
    Logo? : string;
}

const FCCard = ({Name, Logo} : FCCardProps) => {
    return (
        <div className={styles.fcCard}>
            <img className={styles.logo} src={Logo} width={30} height={30} alt="" />
            <span className={styles.name}>{Name}</span>
            <Ellipsis />
        </div>
    );
}

export default FCCard;