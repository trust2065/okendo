import React from "react";
import PropTypes, { string } from "prop-types";
import { IButtonSelector } from "../Utilities/Interface";
import Button from "./Button";
import styled from "styled-components";
import { Colors } from "../Utilities/Enumerations";

interface IButtonSelectorList {
  buttonInfoList: IButtonSelector[];
  maxSelection?: number;
  handleButtonSelectorClick: (
    name: string,
    v: string,
    canSelect: boolean
  ) => any;
  name: string;
}

const ButtonSelector: React.FC<IButtonSelectorList> = ({
  buttonInfoList,
  maxSelection,
  handleButtonSelectorClick,
  name
}) => {
  const buttonList = buttonInfoList.map(buttonInfo => {
    const canSelect =
      !maxSelection ||
      buttonInfo.isActive ||
      buttonInfoList.filter(item => item.isActive).length < maxSelection;

    return (
      <StyledButton
        key={`button_${buttonInfo.id}`}
        value={buttonInfo.value}
        isActive={buttonInfo.isActive}
        onClick={() =>
          handleButtonSelectorClick(name, buttonInfo.value, canSelect)
        }
        canSelect={canSelect}
      >
        {buttonInfo.children}
      </StyledButton>
    );
  });
  return <div>{buttonList}</div>;
};

ButtonSelector.propTypes = {
  buttonInfoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
      children: PropTypes.string.isRequired,
      isActive: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  maxSelection: PropTypes.number,
  handleButtonSelectorClick: PropTypes.func.isRequired,
  name: string.isRequired
};

export default ButtonSelector;

interface IStyledButtonProps {
  value: string;
  children: string;
  isActive: boolean;
  canSelect: boolean;
}

const StyledButton = styled(Button)<IStyledButtonProps>`
  background: ${props => (props.isActive ? Colors.grassGreen : Colors.grey)};
  color: ${props =>
    props.isActive
      ? Colors.white
      : props.canSelect
      ? Colors.black
      : Colors.darkGrey};
  :hover {
    background-color: ${props =>
      props.isActive ? Colors.grassGreen : Colors.hoverGrey};
    cursor: ${props => (props.canSelect ? "pointer" : "not-allowed")};
  }
`;
