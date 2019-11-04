import React, { useState } from "react";
import "./App.css";
import RankBar from "./components/RankBar";
import { RankTypes } from "./Utilities/Enumerations";
import styled from "styled-components";

const App: React.FC = () => {
  const handleClick = (name: string, v: number) => {
    if (!(name in RankTypes)) {
      throw "rank name not in RankTypes error";
    }
    switch (name) {
      case RankTypes.quality:
        setRankQuality(v);
        break;
      case RankTypes.design:
        setRankDesign(v);
        break;
      case RankTypes.experience:
        setRankExperience(v);
        break;
    }
  };

  const [rankQuality, setRankQuality] = useState(1);
  const [rankDesign, setRankDesign] = useState(1);
  const [rankExperience, setRankExperience] = useState(1);

  return (
    <Container className="App">
      <RankGroup>
        <Label>Quality</Label>
        <RankBar
          currentRank={rankQuality}
          handleClick={handleClick}
          name={RankTypes.quality}
          hasStroke={true}
          rankRange={{ min: 1, max: 5, step: 1 }}
        />
        <Label>Design</Label>
        <RankBar
          currentRank={rankDesign}
          handleClick={handleClick}
          name={RankTypes.design}
          hasStroke={true}
          rankRange={{ min: 1, max: 5, step: 1 }}
        />
        <Label>Experience</Label>
        <RankBar
          currentRank={rankExperience}
          handleClick={handleClick}
          name={RankTypes.experience}
          hasStroke={true}
          rankRange={{ min: 1, max: 5, step: 1 }}
        />
      </RankGroup>
    </Container>
  );
};

export default App;

const Container = styled.div`
  background: white;
  border-radius: 5px;
  margin: 0.5rem;
  padding: 1rem;
`;

const Label = styled.label`
  color: #272d45;
`;

const RankGroup = styled.div`
  margin-bottom: 2rem;
`;
