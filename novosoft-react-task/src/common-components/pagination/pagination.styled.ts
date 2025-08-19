import { styled } from "styled-components";
import { theme } from "../../styles/theme";

const { colors } = theme;
export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 6px;

  button {
    border: 1px solid  ${colors.grey};
    background:  ${colors.white};
    padding: 6px 12px;
    border-radius: 50%;
    min-width: 36px;
    height: 36px;
    font-size: 14px;
    cursor: pointer;
    color:  ${colors.text};
    transition: all 0.2s ease;
  }

  button:hover {
    background:  ${colors.statTint};
  }

  .active {
    background:  ${colors.green}; 
    color:  ${colors.white};
    border: 1px solid  ${colors.green};
  }

  .disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
