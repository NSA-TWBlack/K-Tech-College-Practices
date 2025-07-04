import { useState } from "react";

export default function CountClicked() {
  const [count, setCount] = useState(0);

  const handleCountClicked = () => {
    setCount((count) => count + 1);
  };

  return (
    <div className="card">
      <button onClick={handleCountClicked}>Click Me</button>
      <p>Clicked: {count} times</p>
    </div>
  );
}
