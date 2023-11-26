/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export const History = ({ allPasswords }) => {
   // state to save all new passwords
   const [savedPassw, setSavedPassw] = useState([]);

   useEffect(() => {
      // push to back of array new generated password
      setSavedPassw((savedPassw) => [allPasswords, ...savedPassw]);
   }, [allPasswords]);

   return (
      <div className="w-3/4 mt-4">
         <h1 className="text-lg font-semibold">Last 10 generated passwords:</h1>
         <p className="flex flex-col text-center w-full">
            {savedPassw.slice(0, 10).map((item, index) => (
               <li
                  className="w-full list-none truncate text-sm
               "
                  key={index}
               >
                  {item}
               </li>
            ))}
         </p>
      </div>
   );
};
