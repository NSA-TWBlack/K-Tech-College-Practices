import { useRef, useState } from "react";
import styles from "./exercise06.module.css";

export default function KeyPress() {
  const handleKeyPress = () => {};

  return (
    <div className={styles.container}>
      <span>Press key here</span>
      <input type="text" onKeyPress={KeyPress} />
    </div>
  );
}
