import styled from "styled-components";
import { FontSize, Colors } from "../Utilities/Enumerations";

export default styled.button`
  border-radius: 4px;
  border: none;
  background: ${Colors.grassGreen};
  color: ${Colors.white}
  font-size: ${FontSize.small};
  font-weight: 400;
  line-height: 1.6;
  margin: 0 4px 8px 0;
  padding: 4px 8px;
  transition: background 0.2s ease;
  :hover {
    background-color: ${Colors.hoverGrey};
    cursor: pointer;
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
