import { useState } from "react";
import styles from "./DoubleClickMessage.module.css";

export default function DoubleClickMessage() {
  const [showMsg, setShowMsg] = useState(false);

  const handleDoubleClick = () => {
    setShowMsg(true);
    setTimeout(() => setShowMsg(false), 2000);
  };

  return (
    <div className={styles.container}>
      <button onDoubleClick={handleDoubleClick}>Double-click me</button>
      {showMsg && <span>Double-clicked!</span>}
    </div>
  );
}
