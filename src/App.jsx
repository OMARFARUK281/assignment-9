import { useState } from "react";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Body from "./Components/Body/Body";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Body></Body>
    </div>
  );
}

export default App;
