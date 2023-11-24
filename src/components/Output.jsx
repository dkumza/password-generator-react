/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { abc, numbers, symbols } from "../data";

export default function Output({ length, numbersSelected, symbolsSelected }) {
   const [newPassw, setNewPassw] = useState("");

   useEffect(() => {
      if (length < 8 || length > 100) return;
      let newPasswArray = [];
      const randomAbc = () => abc[Math.floor(Math.random() * abc.length)];
      const randomNumber = () =>
         numbers[Math.floor(Math.random() * numbers.length)];
      const randomSymbol = () =>
         symbols[Math.floor(Math.random() * symbols.length)];

      const makeRandomPassw = (length) => {
         for (let i = 0; i < length; i++) {
            if (newPasswArray.length < length) newPasswArray.push(randomAbc());
            if (newPasswArray.length < length && numbersSelected)
               newPasswArray.push(randomNumber());
            if (newPasswArray.length < length && symbolsSelected)
               newPasswArray.push(randomSymbol());
         }
         setNewPassw(newPasswArray.join(""));
      };

      makeRandomPassw(length);
   }, [length, numbersSelected, symbolsSelected]);

   return (
      <div className="border mt-1 text-center text-xl py-2 px-4 max-w-full break-all">
         {newPassw}
      </div>
   );
}
