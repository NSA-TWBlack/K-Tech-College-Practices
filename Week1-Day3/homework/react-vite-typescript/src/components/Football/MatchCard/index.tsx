import styles from './MatchCard.module.css';
import { Ellipsis } from 'lucide-react';

type MatchCardProps = {
    TeamA? : string;
    TeamB? : string;
    TeamAScore? : number;
    TeamBScore? : number;
    TeamALogo? : string;
    TeamBLogo? : string;
    MatchTime? : string;
}

const MatchCard = ({TeamA, TeamB, TeamAScore, TeamBScore, TeamALogo, TeamBLogo, MatchTime} : MatchCardProps) => {
    return (
        <div className={styles.matchCard}>
            <div className={styles.row}>
                <span className={styles.matchTime}>{MatchTime}</span>
                <Ellipsis />
            </div>
            <div className={styles.row}>
                <div className={styles.matchTeam}>
                    <span className={styles.footballClub}>{TeamA}</span>
                    <img className={styles.logo} width={30} height={30} src={TeamALogo} alt="" />
                </div>
                <div className={styles.matchScore}>
                    {TeamAScore} - {TeamBScore}
                </div>
                <div className={styles.matchTeam}>
                    <img className={styles.logo} width={30} height={30} src={TeamBLogo} alt="" />
                    <span className={styles.footballClub}>{TeamB}</span>
                </div>
            </div>
        </div>
    );
}

export default MatchCard;