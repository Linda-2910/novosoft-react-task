import styled from "styled-components";
import { theme } from "../../styles/theme";

const { colors } = theme;
export const SidebarContainer = styled.div`
  width: 240px;
  position: fixed;
  background-color: ${colors.green};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 10rem);
  margin: 32px;
  align-items: center;
  border-radius: 16px;
  border: 1px solid ${colors.green};
  z-index: 99;

  @media (max-width: 1024px) {
    width: 200px;
  }

  @media (max-width: 768px) {
    width: 80px;
    margin: 16px 8px;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 60px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius: 0;
    border: none;
    margin: 0;
    padding: 0;
  }
`;

export const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const MenuItem = styled.li<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  margin: 16px;
  gap: 8px;
  cursor: pointer;
  border-radius: 8px;
  color: ${({ $active }) => ($active ? colors.green : colors.greenLighter)};
  background-color: ${({ $active }) =>
    $active ? colors.white : "transparent"};

  img {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: ${colors.greenLighter};
    color: ${colors.green};
  }

  @media (max-width: 768px) {
    padding: 8px;
    span {
      display: none;
    }
    &:hover {
      background: transparent;
    }
  }

  @media (max-width: 480px) {
    padding: 0;
    margin: 0;
    span {
      display: none;
    }
    &:hover {
      background: transparent;
    }
  }
`;
export const MenuItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SubMenuWrapper = styled.div<{ open?: boolean }>`
  overflow: hidden;
  transition: max-height 0.3s ease;
  max-height: ${({ open }) => (open ? "200px" : "0")};
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SubMenuItem = styled(MenuItem)`
  background-color: ${colors.white};
  color: ${colors.green};
`;
export const GroupedMenuSection = styled.div<{ $active?: boolean }>`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  width: fit-content;
  align-self: flex-start;
`;

export const ArrowIcon = styled.span<{ $rotated?: boolean }>`
  display: inline-flex;
  transition: transform 0.2s ease;
  transform: ${({ $rotated }) =>
    $rotated ? "rotate(180deg)" : "rotate(0deg)"};
`;
export const BottomLogoContainer = styled.div`
  width: 240px;
  height: 66px;
  background-color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 16px 16px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const BottomLogoImg = styled.img`
  width: auto;
  height: 40px;
`;
