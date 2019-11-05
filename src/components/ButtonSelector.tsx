import React from "react";
import PropTypes, { string } from "prop-types";
import styled from "styled-components";
import { IButtonSelector } from "../Utilities/Interface";
import { FontSize } from "../Utilities/Enumerations";

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
      <Button
        key={`button_${buttonInfo.id}`}
        value={buttonInfo.value}
        isActive={buttonInfo.isActive}
        onClick={() =>
          handleButtonSelectorClick(name, buttonInfo.value, canSelect)
        }
        canSelect={canSelect}
      >
        {buttonInfo.children}
      </Button>
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

// color: ${props => (props.isActive ? "#fff" : "#272d45")};
const Button = styled.button<IStyledButtonProps>`
  border-radius: 4px;
  border: none;
  background: ${props => (props.isActive ? "#00ca9b" : "#d9d9d9")};
  color: ${props =>
    props.isActive ? "#fff" : props.canSelect ? "#272d45" : "#8f9097"};
  font-size: ${FontSize.medium};
  font-weight: 400;
  line-height: 1.6;
  margin: 0 4px 8px 0;
  padding: 8px 8px;
  transition: background 0.2s ease;

  :hover {
    ${props =>
      !props.isActive &&
      `
      background-color: #c2c2c2;
      `}
    cursor: ${props => (props.canSelect ? "pointer" : "not-allowed")};
  }
  :active {
    outline: none;
    border: none;
  }
  :focus {
    outline: none;
    border: none;
  }
`;
