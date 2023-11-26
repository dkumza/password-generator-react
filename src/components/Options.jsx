/* eslint-disable react/prop-types */
export default function Options({
   length,
   handleLengthChange,
   handleNumberBox,
   handleSymbolBox,
}) {
   const preventEnter = (e) => e.preventDefault();

   return (
      <div className="">
         <form
            className="flex mt-4 gap-4 p-2 items-center justify-center"
            onSubmit={(e) => preventEnter(e)}
         >
            <label htmlFor="number">
               Choose Length<span className="font-light text-sm">*</span>
            </label>
            <input
               className="border border-sky-500 rounded-lg shadow px-3 w-20"
               type="number"
               min="8"
               max="100"
               value={length}
               onChange={(e) => handleLengthChange(e)}
            />
            <div className="f-1 flex gap-1">
               <input
                  type="checkbox"
                  name="numbers"
                  id="check-number"
                  onClick={(e) => {
                     handleNumberBox(e);
                  }}
               />
               <label htmlFor="numbers">123</label>
            </div>
            <div className="f-2 flex gap-1">
               <input
                  type="checkbox"
                  name="symbols"
                  id="check-symbols"
                  onClick={(e) => {
                     handleSymbolBox(e);
                  }}
               />
               <label htmlFor="symbols">#$&</label>
            </div>
         </form>
      </div>
   );
}
