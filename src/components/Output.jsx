/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { abc, numbers, symbols, strongLevel } from "../data";

export default function Output({
   length,
   numbersSelected,
   symbolsSelected,
   handleAllPasswords,
}) {
   const [newPassw, setNewPassw] = useState([]);
   const [clickCount, setClickCount] = useState(0);
   const [strong, setStrong] = useState([]);

   function rand(max) {
      // return random, for condition to add 1st char in password as number or symbol, not only abc 1st
      return Math.floor(Math.random() * max);
   }

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
      let newPasswArray = [];
      for (let i = 0; i < length; i++) {
         if (newPasswArray.length < length && rand(5)) {
            newPasswArray.push(randomAbc());
         }
         if (newPasswArray.length < length && numbersSelected && rand(2))
            newPasswArray.push(randomNumber());
         if (newPasswArray.length < length && symbolsSelected && rand(2))
            newPasswArray.push(randomSymbol());
      }
      return newPasswArray;
   };

   useEffect(() => {
      if (length < 8 || length > 100) return;
      let strongVal = "";
      const newPassword = makeRandomPassw(length);
      setNewPassw(newPassword);
      if (length >= 8) strongVal = strongLevel[0];
      if ((length >= 8 && numbersSelected) || (length >= 8 && symbolsSelected))
         strongVal = strongLevel[1];
      if (length >= 12) strongVal = strongLevel[1];
      if (
         (length >= 12 && numbersSelected) ||
         (length >= 12 && symbolsSelected)
      )
         strongVal = strongLevel[2];
      if (length >= 16) strongVal = strongLevel[2];
      if (
         (length >= 16 && numbersSelected) ||
         (length >= 16 && symbolsSelected)
      )
         strongVal = strongLevel[3];

      setStrong(strongVal);

      // make new password as string
      handleAllPasswords(newPassword.map((item) => item.char).join(""));
   }, [length, numbersSelected, symbolsSelected, clickCount]);

   return (
      <div className="flex justify-between border rounded-3xl border-sky-500 mt-1 text-center text-2xl tracking-wider  font-semibold py-2 px-4 max-w-full  shadow bg-white w-3/4 truncate">
         <div className="passw-wrap ml-2 truncate">
            {newPassw.map((item, index) => (
               <span key={index} className={item.type}>
                  {item.char}
               </span>
            ))}
         </div>
         <div className="left-wrap flex">
            <div className="">
               <span
                  className={[
                     strong.color,
                     "mr-2 px-3 py-1 rounded-lg text-sm align-middle  text-white",
                  ].join(" ")}
               >
                  {strong.id}
               </span>
            </div>
            <button
               className=" mr-2"
               onClick={() => {
                  setNewPassw(makeRandomPassw(length));
                  setClickCount((prevCount) => prevCount + 1);
               }}
            >
               <i className="bi bi-arrow-clockwise"></i>
            </button>
         </div>
      </div>
   );
}
