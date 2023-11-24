import { useState } from "react";

import "./App.css";
import Output from "./components/Output";

function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <Output />
      </>
   );
}

export default App;
