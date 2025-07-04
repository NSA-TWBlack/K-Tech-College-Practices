import { useState } from "react";
import styles from "./exercise03.module.css";

export default function ToggleSwitch() {
  const [state1, setState1] = useState<string>("On");
  const [state2, setState2] = useState<string>("Off");

  const handleToggleSwitch = (arg1: string) => {
    if (arg1 === "On") {
      setState1((state1) => "Off");
      setState2((state2) => "On");
    } else {
      setState1((state1) => "On");
      setState2((state2) => "Off");
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={() => handleToggleSwitch(state1)}>Turn: {state1}</button>
      <span>State: {state2}</span>
    </div>
  );
}
