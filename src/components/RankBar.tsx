import React from "react";
import styled from "styled-components";
import Prototypes from "prop-types";
import { Colors, FontSize } from "../Utilities/Enumerations";

interface IRankBarProps {
  currentRank: number;
  hasStroke?: boolean;
  rankRange?: { min: number; max: number; step: number };
  handleClick: (name: string, v: number) => any;
  name: string;
}

const RankBar: React.FC<IRankBarProps> = ({
  currentRank,
  hasStroke = false,
  rankRange = { min: 1, max: 5, step: 1 },
  handleClick,
  name
}) => {
  const rankButtons = [];
  let text: string = "";
  let align: string = "";

  for (let i = rankRange.min; i <= rankRange.max; i += rankRange.step) {
    if (hasStroke && i !== rankRange.min) {
      rankButtons.push(
        <RankLine isActive={currentRank >= i} key={`rankLine${i}`}></RankLine>
      );
    }

    if (i === rankRange.min) {
      text = "Poor";
      align = "left";
    } else if (i === rankRange.max) {
      text = "Excellent";
      align = "right";
    } else {
      text = "";
      align = "";
    }
    rankButtons.push(
      <RankButton key={`rankButton_${i}`}>
        <RankValue
          isActive={currentRank >= i}
          onClick={() => handleClick(name, i)}
        >
          {i}
        </RankValue>
        <RankMeaning align={align}>{text}</RankMeaning>
      </RankButton>
    );
  }

  return (
    <>
      <Container>{rankButtons}</Container>
    </>
  );
};

RankBar.propTypes = {
  currentRank: Prototypes.number.isRequired,
  hasStroke: Prototypes.bool,
  rankRange: Prototypes.shape({
    max: Prototypes.number.isRequired,
    min: Prototypes.number.isRequired,
    step: Prototypes.number.isRequired
  }),
  handleClick: Prototypes.func.isRequired
};

interface IRankValueProps {
  isActive: boolean;
}
interface IRankLineProps {
  isActive: boolean;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0 2.5rem;
`;

const RankValue = styled.button<IRankValueProps>`
  border: none;
  background: ${props => (props.isActive ? Colors.grassGreen : Colors.grey)};
  border-radius: 50%;
  color: ${props => (props.isActive ? Colors.white : Colors.black)};
  height: 1.8rem;
  width: 1.8rem;
  line-height: 1.8;
  font-size: ${FontSize.medium};
  :active {
    outline: none;
    border: none;
  }
  :focus {
    outline: none;
    border: none;
  }
  :hover {
    background: #fff;
    box-shadow: inset 0 0 0 4px ${Colors.grassGreen};
    color: ${Colors.grassGreen};
    cursor: pointer;
    transition: transform 0.2s;
    transform: scale(1.2);
  }
`;

const RankLine = styled.div<IRankLineProps>`
  position: relative;
  flex-grow: 1;
  ::before {
    background: ${props => (props.isActive ? Colors.grassGreen : Colors.grey)};
    content: "";
    height: 4px;
    left: 0;
    right: 0;
    position: absolute;
    top: calc(50% - 2px);
  }
`;

const RankMeaning = styled.div<{ align: string }>`
  position: absolute;
  top: 100%;
  margin-top: 5px;
  color: ${Colors.darkGrey};
  font-size: ${FontSize.small};
  ${props => props.align === "left" && "left: 0"}
  ${props => props.align === "right" && "right: 0"}
}
`;

const RankButton = styled.div`
  position: relative;
  z-index: 1;
`;

export default RankBar;
