import { useState } from "react";

import Output from "./components/Output";
import Options from "./components/Options";

import "./App.css";
import { History } from "./components/History";

function App() {
   // set default password length to 20 chars
   const [length, setLength] = useState(20);
   // controls if numbers option are selected
   const [numbersSelected, setNumbersSelected] = useState(false);
   // controls if symbols option are selected
   const [symbolsSelected, setSymbolsSelected] = useState(false);
   // saves all generated passwords to array
   const [allPasswords, setAllPasswords] = useState([]);

   const handleLengthChange = (e) => {
      // if length option changed, then updates to match
      setLength(e.target.value);
   };

   const handleNumberBox = (e) => {
      // if numbers option changed, then updates to match
      setNumbersSelected(e.target.checked);
   };

   const handleSymbolBox = (e) => {
      // if symbols option changed, then updates to match
      setSymbolsSelected(e.target.checked);
   };

   const handleAllPasswords = (newPassword) => {
      // if new password is generated, map DOM
      setAllPasswords(newPassword);
   };

   return (
      <div className="max-w-full flex flex-col items-center w-full">
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
         <p className="font-light text-xs text-center text-slate-400 w-full ">
            *between 8 and 100 characters
         </p>
         <History allPasswords={allPasswords} />
      </div>
   );
}

export default App;
