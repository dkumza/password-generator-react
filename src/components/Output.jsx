/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { abc, numbers, symbols } from "../data";

export default function Output({ length, numbersSelected, symbolsSelected }) {
   const [newPassw, setNewPassw] = useState([]);

   useEffect(() => {
      if (length < 8 || length > 100) return;
      let newPasswArray = [];
      const randomAbc = () => ({
         char: abc[Math.floor(Math.random() * abc.length)],
         type: "",
      });
      const randomNumber = () => ({
         char: numbers[Math.floor(Math.random() * numbers.length)],
         type: "text-sky-600",
      });
      const randomSymbol = () => ({
         char: symbols[Math.floor(Math.random() * symbols.length)],
         type: "text-rose-600",
      });

      const makeRandomPassw = (length) => {
         for (let i = 0; i < length; i++) {
            if (newPasswArray.length < length) {
               newPasswArray.push(randomAbc());
            }
            if (newPasswArray.length < length && numbersSelected)
               newPasswArray.push(randomNumber());
            if (newPasswArray.length < length && symbolsSelected)
               newPasswArray.push(randomSymbol());
         }
         setNewPassw(newPasswArray);
      };

      makeRandomPassw(length);
   }, [length, numbersSelected, symbolsSelected]);

   return (
      <div className="border mt-1 text-center text-2xl tracking-wider font-semibold py-2 px-4 max-w-full break-all ">
         {newPassw.map((item, index) => (
            <span key={index} className={item.type}>
               {item.char}
            </span>
         ))}
      </div>
   );
}
