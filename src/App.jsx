import { useState } from "react";

import Output from "./components/Output";
import Options from "./components/Options";

import "./App.css";

function App() {
   const [length, setLength] = useState(8);

   const handleLengthChange = (e) => {
      setLength(e.target.value);
   };

   return (
      <div className="max-w-full">
         <Output length={length} handleLengthChange={handleLengthChange} />
         <Options length={length} handleLengthChange={handleLengthChange} />
      </div>
   );
}

export default App;
