import styles from './TextBox.module.css';

type TextBoxProps = {
    label?: string; 
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    type?: 'light' | 'bold';
    icon?: 'normal' | 'circle' | 'square';
}

const TextBox = ({label, leftIcon, rightIcon, type='light', icon='normal'} : TextBoxProps) => {
    let iconClass = styles.normal;
    if (icon === 'circle') iconClass = styles.circle;
    if (icon === 'square') iconClass = styles.square;

    return (
        <div className={styles.textBox}>
            {leftIcon}
            <p className={type === 'bold' ? styles.bold : styles.light}>{label}</p>
            {rightIcon ? (
                <div className={iconClass}>
                    {rightIcon}
                </div>
            ) : null}
        </div>
    );
}

export default TextBox;