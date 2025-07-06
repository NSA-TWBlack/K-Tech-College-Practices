import React, { useState } from "react";
import styles from "./Calculator.module.css";

type Operator = "+" | "-" | "×" | "÷" | null;

const operatorMap: Record<string, string> = {
  "÷": "/",
  "×": "*",
  "+": "+",
  "-": "-",
};

const Calculator: React.FC = () => {
  const [expression, setExpression] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [lastInput, setLastInput] = useState<string>("");
  const [hasDecimal, setHasDecimal] = useState<boolean>(false);
  const [justEvaluated, setJustEvaluated] = useState<boolean>(false);

  const isOperator = (val: string) => ["+", "-", "×", "÷"].includes(val);

  const handleButtonClick = (val: string) => {
    if (val === "C") {
      setExpression("");
      setResult("");
      setLastInput("");
      setHasDecimal(false);
      setJustEvaluated(false);
      return;
    }

    if (val === "=") {
      try {
        let exp = expression;
        if (isOperator(exp.slice(-1))) exp = exp.slice(0, -1);
        exp = exp.replace(/÷/g, "/").replace(/×/g, "*");
        if (/\/0(?!\d)/.test(exp)) {
          setResult("Error");
          setJustEvaluated(true);
          return;
        }
        // eslint-disable-next-line no-eval
        const evalResult = eval(exp);
        setResult(evalResult.toString());
        setJustEvaluated(true); // SET
      } catch {
        setResult("Error");
        setJustEvaluated(true);
      }
      return;
    }

    if (isOperator(val)) {
      if (justEvaluated && result && result !== "Error") {
        setExpression(result + val);
        setLastInput(val);
        setHasDecimal(false);
        setJustEvaluated(false);
        return;
      }
      if (expression === "" && val !== "-") return;
      if (isOperator(lastInput)) {
        setExpression(expression.slice(0, -1) + val);
      } else {
        setExpression(expression + val);
      }
      setLastInput(val);
      setHasDecimal(false);
      setJustEvaluated(false);
      return;
    }

    if (val === ".") {
      if (hasDecimal) return;
      if (lastInput === "" || isOperator(lastInput) || justEvaluated) {
        setExpression((justEvaluated ? "" : expression) + "0.");
      } else {
        setExpression(expression + ".");
      }
      setLastInput(".");
      setHasDecimal(true);
      setJustEvaluated(false);
      return;
    }

    // Number input
    if (justEvaluated) {
      setExpression(val);
      setResult("");
      setLastInput(val);
      setHasDecimal(false);
      setJustEvaluated(false);
      return;
    }
    setExpression(expression + val);
    setLastInput(val);
    if (isOperator(lastInput)) setHasDecimal(false);
    setJustEvaluated(false);
  };

  // Update hasDecimal when expression changes
  React.useEffect(() => {
    const parts = expression.split(/[+\-×÷]/);
    const last = parts[parts.length - 1];
    setHasDecimal(last?.includes(".") ?? false);
  }, [expression]);

  return (
    <div className={styles.calculator}>
      <div className={styles.display}>
        <div className={styles.expression}>{expression || "0"}</div>
        <div className={styles.result}>{result}</div>
      </div>
      <div className={styles.buttons}>
        {[
          "7",
          "8",
          "9",
          "÷",
          "4",
          "5",
          "6",
          "×",
          "1",
          "2",
          "3",
          "-",
          "0",
          ".",
          "C",
          "+",
        ].map((btn) => (
          <button
            key={btn}
            className={`${styles.button} ${
              isOperator(btn) ? styles.operator : ""
            } ${btn === "C" ? styles.clear : ""}`}
            onClick={() => handleButtonClick(btn)}
            type="button"
          >
            {btn}
          </button>
        ))}
        <button
          className={`${styles.button} ${styles.equals}`}
          onClick={() => handleButtonClick("=")}
          type="button"
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
