import { useState } from "react";

import Output from "./components/Output";
import Options from "./components/Options";

import "./App.css";

function App() {
   const [count, setCount] = useState(0);

   return (
      <div className="max-w-full">
         <Output />
         <Options />
      </div>
   );
}

export default App;
