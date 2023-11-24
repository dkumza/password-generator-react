import { useState } from "react";

import Output from "./components/Output";
import Options from "./components/Options";

import "./App.css";

function App() {
   const [length, setLength] = useState(8);
   const [numbersSelected, setNumbersSelected] = useState(false);
   const [symbolsSelected, setSymbolsSeleted] = useState(false);

   const handleLengthChange = (e) => {
      setLength(e.target.value);
   };

   const handleNumberBox = (e) => {
      // console.log(e.target.checked);
      setNumbersSelected(e.target.checked);
   };

   return (
      <div className="max-w-full">
         <Output length={length} numbersSelected={numbersSelected} />
         <Options
            length={length}
            numbersSelected={numbersSelected}
            symbolsSelected={symbolsSelected}
            handleLengthChange={handleLengthChange}
            handleNumberBox={handleNumberBox}
         />
      </div>
   );
}

export default App;
