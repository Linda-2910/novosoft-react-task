import styled from "styled-components";
import DropDown from "../../assets/Vector.svg";
import { theme } from "../../styles/theme";

const { colors } = theme;

export const NavbarContainer = styled.header`
  width: 100%;
  height: 60px;
  background-color: ${colors.white};
  box-shadow: 0px 5px 20px 0px #0000000D;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (min-width: 481px) {
    height: 72px;
    padding: 0 20px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 32px;
    width: auto;
  }

  @media (min-width: 481px) {
    img {
      height: 40px;
    }
  }
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  @media (min-width: 481px) {
    gap: 12px;
  }
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;

  @media (min-width: 481px) {
    width: 40px;
    height: 40px;
  }
`;

export const UserText = styled.div`
  display: none;

  @media (min-width: 481px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Greeting = styled.span`
  font-family: "Gilroy", sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  color: ${colors.subtext};

  @media (min-width: 481px) {
    font-size: 14px;
  }
`;

export const UserName = styled.span`
  font-family: "Gilroy", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: ${colors.text};

  @media (min-width: 481px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const DropdownIcon = styled.img.attrs({
  src: DropDown,
  alt: "Dropdown Icon",
})`
  width: 12px;
  height: 6px;
  position: relative;
  top: 1px;

  @media (min-width: 481px) {
    top: 2px;
  }
`;
