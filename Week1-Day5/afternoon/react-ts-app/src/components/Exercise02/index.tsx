import { useState } from "react";
import styles from "./exercise02.module.css";

export default function InputChange() {
  const [text, setText] = useState("Notthing");

  const handleInputTracker = (event) => {
    setText((text) => event.target.value);
  };

  return (
    <div className={styles.container}>
      <input type="text" onChange={handleInputTracker} />
      <span>{text.length > 0 ? text : "Nothing"}</span>
    </div>
  );
}
