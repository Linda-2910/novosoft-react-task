import styled from "styled-components";
import { theme } from "../../styles/theme";

const { colors } = theme;
export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; 
    gap: 16px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; 
    gap: 12px;
    padding: 0 12px; 
  }
`;
export const Header = styled.div`
font-weight: 700;
font-size: 32px;
 padding: 16px 24px; 
`;
export const LeftCard = styled.div`
  border: 1px solid ${colors.grey};
  border-radius: 12px;
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  height: 62px;
  width: 72px;
`;

export const QRCode = styled.img`
  width: 426px;
  height: 426px;
`;

export const UPIText = styled.div`
  font-size: 20px;
  font-weight: 700;
  color:${colors.text};
`;

export const UserName = styled.div`
  font-size: 16px;
  color: ${colors.subtext};
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  width: 60%;
  justify-content: center;
`;

export const ActionBtn = styled.button`
  flex: 1;
  padding: 10px 16px;
  border-radius: 8px;
  gap: 8px;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  border: none;
  color: ${colors.text};
background-color: ${colors.grey};
  &:hover {
    background: ${colors.border};
    box-shadow:${colors.shadow};  
  }

  img {
    width: 16px;
    height: 16px;
    padding: 0 8px;
  }
`;

export const RightCard = styled.div`
  border: 1px solid ${colors.grey};
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;
export const TabsWrapper = styled.div`
  display: flex;
  border: 1px solid ${colors.greenDark};
  border-radius: 8px;
  overflow: hidden;
  width: 90%;
  margin-bottom: 16px;
  padding: 8px;
`;

export const Tab = styled.div<{ active?: boolean }>`
  flex: 1;
  text-align: center;
  padding: 10px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  background: ${({ active }) => (active ? colors.green : colors.white)};
  color: ${({ active }) => (active ? colors.white : colors.green)};
  transition: all 0.2s ease;
  border: none; 
  border-radius:4px;

  &:hover {
    background: ${({ active }) => (active ? colors.green : colors.bg)};
  }
`;

export const QRList = styled.div`
  flex: 1;
  overflow-y: auto;
  gap:16px;
`;

export const QRItem = styled.div`
 display: flex;
  align-items: center;
  justify-content: space-between; 
  padding: 12px 16px;
  border-bottom: 1px solid ${colors.grey};
  cursor: pointer;
`;
export const ArrowWrapper = styled.div`
  color: ${colors.subtext};
  flex-shrink: 0; 
  margin-left: 8px;
`;
export const SmallQR = styled.img`
  width: 96px;
  height: 96px;
  border: 1.33px solid ${colors.grey};
`;

export const QRDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6px 46px;
`;

export const QRTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${colors.text};
`;

export const QRSubtitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.text};
`;

export const QRLabel = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.subtext};
`;

export const FooterBtn = styled.button`
  background: ${colors.green};
  color: ${colors.white};
  font-weight: 600;
  font-size: 14px;
  padding: 12px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  margin-top: 12px;
`;

export const StatusBox = styled.div`
  background: ${colors.greenLighter};
  border-radius: 8px;
  margin: 0 0 20px 0;
  border: 1px solid ${colors.subtext};
  overflow: hidden;
`;

export const StatusHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const StatusWrapper = styled.div<{ expanded: boolean }>`
  max-height: ${({ expanded }) => (expanded ? "400px" : "0")};
  overflow: hidden;
  transition: max-height 0.35s ease;
`;

export const StatusContent = styled.div`
  padding: 12px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StatusStep = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const StatusCircle = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid ${colors.subtext};
  background: transparent;
`;


export const StatusLabel = styled.div<{ active?: boolean }>`
  font-size: 20px;
  font-weight: ${({ active }) => (active ? 600 : 500)};
  color: ${({ active }) => (active ? colors.greenDark : colors.subtext)};
`;
