import React, { useState } from "react";
import "./App.css";
import RankBar from "./components/RankBar";
import ButtonSelector from "./components/ButtonSelector";
import {
  ButtonSelectorTypes,
  Colors,
  RankTypes,
  FontSize
} from "./Utilities/Enumerations";
import { setSingleSelection } from "./Utilities/Functions";
import { IButtonSelector } from "./Utilities/Interface";

import styled from "styled-components";

const App: React.FC = () => {
  const handleClick = (name: string, v: number) => {
    if (!(name in RankTypes)) {
      throw new Error("rank name not in RankTypes error");
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
  const handleButtonSelectorClick = (
    name: string,
    v: string,
    canSelectMore: boolean
  ) => {
    if (!(name in ButtonSelectorTypes)) {
      throw new Error("button selector name not in ButtonSelectorTypes error");
    }
    if (canSelectMore) {
      switch (name) {
        case ButtonSelectorTypes.productStandout: {
          setProductStandout(
            productStandout.map(item =>
              item.value === v ? { ...item, isActive: !item.isActive } : item
            )
          );
          break;
        }
      }
    }
  };
  const handleSingleButtonSelectorClick = (name: string, v: string) => {
    if (!(name in ButtonSelectorTypes)) {
      throw new Error(
        "single button selector name not in ButtonSelectorTypes error"
      );
    }
    switch (name) {
      case ButtonSelectorTypes.aboutYou: {
        setAboutYou(setSingleSelection(aboutYou, v));
        break;
      }
      case ButtonSelectorTypes.boughtFor: {
        setBoughtFor(setSingleSelection(boughtFor, v));
        break;
      }
    }
  };

  const initialValues = {
    productStandout: [
      {
        id: 1,
        children: "Accurate Timekeeping",
        value: "Accurate Timekeeping",
        isActive: false
      },
      {
        id: 2,
        children: "High Quality",
        value: "High Quality",
        isActive: false
      },
      {
        id: 3,
        children: "Durable",
        value: "Durable",
        isActive: false
      },
      {
        id: 4,
        children: "Elegant",
        value: "Elegant",
        isActive: false
      },
      {
        id: 5,
        children: "Good Weight",
        value: "Good Weight",
        isActive: false
      },
      {
        id: 6,
        children: "Versatile",
        value: "Versatile",
        isActive: false
      },
      {
        id: 7,
        children: "Looks Expensive",
        value: "Looks Expensive",
        isActive: false
      },
      {
        id: 8,
        children: "Attracts Compliments",
        value: "Attracts Compliments",
        isActive: false
      },
      {
        id: 9,
        children: "Unique",
        value: "Unique",
        isActive: false
      },
      {
        id: 10,
        children: "Great Gift",
        value: "Great Gift",
        isActive: false
      },
      {
        id: 11,
        children: "Great Value",
        value: "Great Value",
        isActive: false
      }
    ],
    aboutYou: [
      {
        id: 1,
        children: "Under 18",
        value: "Under 18",
        isActive: false
      },
      {
        id: 2,
        children: "18 - 24",
        value: "18 - 24",
        isActive: false
      },
      {
        id: 3,
        children: "25 - 34",
        value: "25 - 34",
        isActive: false
      },
      {
        id: 4,
        children: "35 - 44",
        value: "35 - 44",
        isActive: false
      },
      {
        id: 5,
        children: "45 - 54",
        value: "45 - 54",
        isActive: false
      },
      {
        id: 6,
        children: "55 - 64",
        value: "55 - 64",
        isActive: false
      },
      {
        id: 7,
        children: "65+",
        value: "65+",
        isActive: false
      }
    ],
    boughtFor: [
      {
        id: 1,
        children: "Personal Use",
        value: "Personal Use",
        isActive: false
      },
      {
        id: 2,
        children: "Gift",
        value: "Gift",
        isActive: false
      }
    ]
  };

  const maxSelectionProductStandout = 5;

  const [rankQuality, setRankQuality] = useState(1);
  const [rankDesign, setRankDesign] = useState(1);
  const [rankExperience, setRankExperience] = useState(1);
  const [productStandout, setProductStandout] = useState<IButtonSelector[]>(
    initialValues.productStandout
  );
  const [aboutYou, setAboutYou] = useState<IButtonSelector[]>(
    initialValues.aboutYou
  );
  const [boughtFor, setBoughtFor] = useState<IButtonSelector[]>(
    initialValues.boughtFor
  );

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
      <Selection>
        <Label>Product Standouts</Label>
        <LabelSub>Choose up to 5 that best apply (optional)</LabelSub>
        <ButtonSelector
          name={ButtonSelectorTypes.productStandout}
          handleButtonSelectorClick={handleButtonSelectorClick}
          maxSelection={maxSelectionProductStandout}
          buttonInfoList={productStandout}
        ></ButtonSelector>
      </Selection>

      <Header>About You</Header>
      <Selection>
        <Label>Age Range</Label>
        <LabelSub>
          Choose <b>one</b>
        </LabelSub>
        <ButtonSelector
          name={ButtonSelectorTypes.aboutYou}
          handleButtonSelectorClick={handleSingleButtonSelectorClick}
          buttonInfoList={aboutYou}
        ></ButtonSelector>
      </Selection>
      <Selection>
        <Label>Bought For</Label>
        <LabelSub>
          Choose <b>one</b>
        </LabelSub>
        <ButtonSelector
          name={ButtonSelectorTypes.boughtFor}
          handleButtonSelectorClick={handleSingleButtonSelectorClick}
          buttonInfoList={boughtFor}
        ></ButtonSelector>
      </Selection>
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

const Header = styled.label`
  color: ${Colors.headerBlack};
  display: block;
  font-size: ${FontSize.medium};
  font-weight: 700;
  margin-bottom: 1rem;
`;
const Label = styled.label`
  color: ${Colors.black};
  display: block;
  font-size: ${FontSize.medium};
  margin-bottom: 0.5rem;
`;
const LabelSub = styled.label`
  color: ${Colors.darkGrey};
  font-size: ${FontSize.small}
  display: block;
  margin-bottom: 0.5rem;
`;

const RankGroup = styled.div`
  margin-bottom: 2rem;
`;

const Selection = styled.div`
  margin-bottom: 1rem;
`;
