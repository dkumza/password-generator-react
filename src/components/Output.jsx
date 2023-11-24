import { abc, numbers, symbols } from "../data";

export default function Output() {
   const length = 100;

   // RANDOM generator
   const randomAbc = () => abc[Math.floor(Math.random() * abc.length)];
   const randomNumber = () =>
      numbers[Math.floor(Math.random() * numbers.length)];
   const randomSymbol = () =>
      symbols[Math.floor(Math.random() * symbols.length)];

   let newPasswArray = [];
   let newPassw = "";

   const makeRandomPassw = (length) => {
      for (let i = 0; i <= length; i++) {
         if (newPasswArray.length < length) newPasswArray.push(randomAbc());
         if (newPasswArray.length < length) newPasswArray.push(randomNumber());
         if (newPasswArray.length < length) newPasswArray.push(randomSymbol());
         newPassw = newPasswArray.join("");
      }
   };

   makeRandomPassw(length);

   return (
      <div className="border mt-1 text-center text-xl py-2 px-4 ">
         {newPassw}
      </div>
   );
}
