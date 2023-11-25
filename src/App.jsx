import { useState } from "react";

import Output from "./components/Output";
import Options from "./components/Options";

import "./App.css";
import { History } from "./components/History";

function App() {
   const [length, setLength] = useState(20);
   const [numbersSelected, setNumbersSelected] = useState(false);
   const [symbolsSelected, setSymbolsSelected] = useState(false);
   const [allPasswords, setAllPasswords] = useState([]);

   const handleLengthChange = (e) => {
      setLength(e.target.value);
   };

   const handleNumberBox = (e) => {
      setNumbersSelected(e.target.checked);
   };

   const handleSymbolBox = (e) => {
      setSymbolsSelected(e.target.checked);
   };

   const handleAllPasswords = (newPassword) => {
      setAllPasswords(newPassword);
   };

   return (
      <div className="max-w-full flex flex-col items-center">
         <Output
            length={length}
            numbersSelected={numbersSelected}
            symbolsSelected={symbolsSelected}
            allPasswords={allPasswords}
            handleAllPasswords={handleAllPasswords}
         />
         <Options
            length={length}
            numbersSelected={numbersSelected}
            handleLengthChange={handleLengthChange}
            handleNumberBox={handleNumberBox}
            handleSymbolBox={handleSymbolBox}
         />
         <History allPasswords={allPasswords} />
      </div>
   );
}

export default App;
