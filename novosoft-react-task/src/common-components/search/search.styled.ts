import styled from "styled-components";
import { theme } from "../../styles/theme";

const { colors } = theme;

export const SearchWrapper = styled.div`
  position: relative;
  width: 80%;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 14px 10px 40px; 
  border-radius: 8px;
  border: 1px solid ${colors.grey};
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 500;
`;

export const Icon = styled.img`
  position: absolute;
  left: 12px;
  top: 35%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  pointer-events: none;
`;
