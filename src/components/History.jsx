/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export const History = ({ allPasswords }) => {
   // state to save all new passwords
   const [savedPassw, setSavedPassw] = useState(
      // check if localStorage exists, if so show last 10 passwords (on refresh there will be last value new password)
      JSON.parse(localStorage.getItem("data")) || [] // else returns empty string
   );

   useEffect(() => {
      // if allpasswords are empty return
      if (allPasswords.length === 0) return;
      // push to back of array new generated password and cut 10 values from start
      let newPassword = [allPasswords, ...savedPassw].splice(0, 10);
      localStorage.setItem("data", JSON.stringify(newPassword)); // updating localStorage with passwords
      setSavedPassw(newPassword); // creates new password at history DOM using state savedPassw
   }, [allPasswords]);

   return (
      <div className="w-3/4 px-8 mt-4 ">
         <h1 className="text-lg font-semibold mb-2">
            Last 10 generated passwords:
         </h1>
         <p className="flex flex-col text-center w-full gap-1 border-sky-100 py-4 px-6 rounded-3xl bg-white divide-y divide-sky-100 border hover:border hover:border-sky-400">
            {savedPassw.map((item, index) => (
               <li
                  className="w-full list-none truncate text-sm hover:bg-slate-50 hover:cursor-pointer hover:font-semibold
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
