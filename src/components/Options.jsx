export default function Options({ length, handleLengthChange }) {
   //    console.log(props);
   return (
      <div className="">
         <form className="flex border mt-4 gap-4  p-2 items-center justify-center">
            <label htmlFor="number">
               Choose Length<span className="font-light text-sm">*</span>
            </label>
            <input
               className="border py-1 px-3 w-20 outline-none"
               type="number"
               min="8"
               max="100"
               value={length}
               onChange={(e) => handleLengthChange(e)}
            />
            <div className="f-1 flex gap-1">
               <input type="checkbox" name="numbers" id="check-number" />
               <label htmlFor="numbers">Numbers</label>
            </div>
            <div className="f-2 flex gap-1">
               <input type="checkbox" name="symbols" id="check-symbols" />
               <label htmlFor="symbols">Symbols</label>
            </div>
         </form>
         <p className="text-left font-light pl-1 text-xs">
            *between 8 and 100 characters
         </p>
      </div>
   );
}
