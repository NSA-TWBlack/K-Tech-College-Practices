import { useState } from "react";
import styles from "./exercise06.module.css";

export default function KeyPress() {
  const [lastKey, setLastKey] = useState<string>("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setLastKey(e.key);
  };

  return (
    <div className={styles.container}>
      <span>Press key here</span>
      <input className={styles.txtKey} type="text" onKeyDown={handleKeyDown} />
      <p>Last key: {lastKey}</p>
    </div>
  );
}
