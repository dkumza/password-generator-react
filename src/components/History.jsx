/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export const History = ({ allPasswords }) => {
   const [savedPassw, setSavedPassw] = useState([]);

   useEffect(() => {
      if (allPasswords.length > 0) {
         setSavedPassw((prevPasswords) => [...prevPasswords, allPasswords]);
      }
   }, [allPasswords]);

   return (
      <div className="border w-3/4 mt-4">
         <h1>Last 10 generated passwords</h1>
         <p>
            {savedPassw.slice(-10).map((item, index) => (
               <li key={index}>{item}</li>
            ))}
         </p>
         {/* {allPasswords.map((item, index) => (
            <span key={index} className="">
               {item.char}
            </span>
         ))} */}
      </div>
   );
};
