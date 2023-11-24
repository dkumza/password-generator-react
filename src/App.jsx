import { useState } from "react";

import Output from "./components/Output";
import Options from "./components/Options";

import "./App.css";

function App() {
   const [length, setLength] = useState(8);
   const [numbersSelected, setNumbersSelected] = useState(false);
   const [symbolsSelected, setSymbolsSelected] = useState(false);

   const handleLengthChange = (e) => {
      setLength(e.target.value);
   };

   const handleNumberBox = (e) => {
      setNumbersSelected(e.target.checked);
   };

   const handleSymbolBox = (e) => {
      setSymbolsSelected(e.target.checked);
   };

   return (
      <div className="max-w-full">
         <Output
            length={length}
            numbersSelected={numbersSelected}
            symbolsSelected={symbolsSelected}
         />
         <Options
            length={length}
            numbersSelected={numbersSelected}
            handleLengthChange={handleLengthChange}
            handleNumberBox={handleNumberBox}
            handleSymbolBox={handleSymbolBox}
         />
      </div>
   );
}

export default App;
