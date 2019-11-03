import React, { useState } from "react";
import "./App.css";
import RankBar from "./components/RankBar";

const App: React.FC = () => {
  const handleClick = (v: number) => {
    setCurrentRank(v);
  };

  const [currentRank, setCurrentRank] = useState(1);

  return (
    <div className="App">
      <RankBar
        currentRank={currentRank}
        handleClick={handleClick}
        hasStroke={true}
        // rankRange={{ min: 1, max: 15, step: 1 }}
      />
    </div>
  );
};

export default App;
