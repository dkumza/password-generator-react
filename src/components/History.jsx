/* eslint-disable react/prop-types */
export const History = ({ allPasswords }) => {
   allPasswords.map((item) => console.log(item));
   return (
      <div className="border w-3/4 mt-4">
         <h1>Last 10 generated passwords</h1>
         {allPasswords.map((item, index) => (
            <span key={index} className="">
               {item.char}
            </span>
         ))}
      </div>
   );
};
