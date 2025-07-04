import { useRef, useState } from "react";
import styles from "./exercise05.module.css";

export default function SubmissionAlert() {
  const textRef = useRef(null);

  const handleSubmissionAlert = (event) => {
    // event.preventDefault();
    alert(textRef.current.value);
  };

  return (
    <form onSubmit={handleSubmissionAlert} className={styles.container}>
      <input ref={textRef} type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}
