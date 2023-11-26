/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export const History = ({ allPasswords }) => {
   // state to save all new passwords
   const [savedPassw, setSavedPassw] = useState(
      // check if localStorage exists, if so show last 10 passwords (on refresh there will be last value new password)
      // else returns empty string
      JSON.parse(localStorage.getItem("data")) || []
   );

   useEffect(() => {
      // if allpasswords are empty return
      if (allPasswords.length === 0) return;
      // push to back of array new generated password and cut 12 values from start
      let newPassword = [allPasswords, ...savedPassw].splice(0, 10);
      localStorage.setItem("data", JSON.stringify(newPassword));
      setSavedPassw(newPassword);
   }, [allPasswords]);

   return (
      <div className="w-3/4 mt-4">
         <h1 className="text-lg font-semibold">Last 10 generated passwords:</h1>
         <p className="flex flex-col text-center w-full">
            {savedPassw.map((item, index) => (
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
