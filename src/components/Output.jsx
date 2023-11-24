import { useState, useEffect } from "react";
import { abc, numbers, symbols } from "../data";

export default function Output({ length }) {
   const [newPassw, setNewPassw] = useState("");

   useEffect(() => {
      const randomAbc = () => abc[Math.floor(Math.random() * abc.length)];

      let newPasswArray = [];

      const makeRandomPassw = (length) => {
         for (let i = 0; i < length; i++) {
            if (newPasswArray.length < length) newPasswArray.push(randomAbc());
         }
         setNewPassw(newPasswArray.join(""));
      };

      makeRandomPassw(length);
   }, [length]);

   return (
      <div className="border mt-1 text-center text-xl py-2 px-4 max-w-full break-all">
         {newPassw}
      </div>
   );
}
