import React, { useState } from "react";
import { BarBackground, ProgressBarActive } from "./style";

const App = () => {
  const [valueRange, setValueRange] = useState(0);
  const handleChangeRange = (e) => {
    setValueRange(e.target.value);
  };

  return (
    <div>
      {valueRange}%<br/>
      <BarBackground>
        <ProgressBarActive range={valueRange}/>
      </BarBackground>
      <input type="range" step="0.1" max="200" defaultValue="0" onChange={handleChangeRange} />
      
    </div>
  );
};

export default App;
