import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Navbar } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <Navbar />
    </div>
  );
}

export default App;
