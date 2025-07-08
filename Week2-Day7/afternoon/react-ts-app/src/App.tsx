import { useState } from "react";
import "./App.css";
import RouterApp from "./assets";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterApp />
    </>
  );
}

export default App;
