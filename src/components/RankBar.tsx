import React from "react";
import styled from "styled-components";
import Prototypes from "prop-types";

interface RankBarProps {
  currentRank: number;
  hasStroke?: boolean;
  rankRange?: { min: number; max: number; step: number };
  handleClick: (v: number) => any;
}

const RankBar: React.FC<RankBarProps> = ({
  currentRank,
  hasStroke = false,
  rankRange = { min: 1, max: 5, step: 1 },
  handleClick
}) => {
  const rankButtons = [];
  for (let i = rankRange.min; i <= rankRange.max; i += rankRange.step) {
    if (hasStroke && i !== rankRange.min) {
      rankButtons.push(
        <RankLine isActive={currentRank >= i} key={`rankLine${i}`}></RankLine>
      );
    }
    rankButtons.push(
      <Button
        isActive={currentRank >= i}
        key={`rankButton${i}`}
        onClick={() => handleClick(i)}
      >
        {i}
      </Button>
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

export default RankBar;

interface ButtonProps {
  isActive: boolean;
}
interface RankLineProps {
  isActive: boolean;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button<ButtonProps>`
  border: none;
  background: ${props => (props.isActive ? "#00ca9b" : "#d9d9d9")};
  border-radius: 50%;
  color: ${props => (props.isActive ? "#fff" : "#272d45")};
  height: 2rem;
  width: 2rem;
  font-size: 0.9rem;
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
    box-shadow: inset 0 0 0 4px #00ca9b;
    color: #00ca9b;
    cursor: pointer;
    transition: transform 0.2s;
    transform: scale(1.2);
  }
`;

const RankLine = styled.div<RankLineProps>`
  position: relative;
  flex-grow: 1;
  z-index: -1;
  ::before {
    background: ${props => (props.isActive ? "#00ca9b" : "#d9d9d9")};
    content: "";
    height: 4px;
    left: 0;
    right: 0;
    position: absolute;
    top: calc(50% - 2px);
  }
`;
