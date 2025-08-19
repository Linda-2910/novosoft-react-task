import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/theme";

const { colors } = theme;
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex; justify-content: center; align-items: center;
  z-index: 999;
  animation: ${fadeIn} 0.25s ease forwards;
`;

export const Popup = styled.div`
  background: #fff;
  width: 70%;
  height: 80%;
  border-radius: 12px;
  padding: 32px;
  position: relative;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  font-family: "Inter", sans-serif;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
`;

export const CloseBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  img {
    width: 32px;
    height: 32px;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 18px;
`;
export const RowSmall = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;

export const Label = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: ${colors.subtext};
`;

export const Value = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: ${colors.text};
`;

export const TotalText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  font-size:20px;
`;
export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size:24px;
`;

export const Right = styled.div`
  font-weight: 600;
  font-size: 32px;
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

export const GreenText = styled.span`
  color: ${colors.greenLight};
  font-size: 24px;
  font-weight: 600;
`;

export const Divider = styled.hr`
  margin: 20px 0;
  border: none;
  border-top: 1px solid #eee;
`;

export const SectionTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.subtext};
  letter-spacing: 1px;
  margin-bottom: 10px;
`;

export const InfoBox = styled.div`
  margin-top: 18px;
  padding: 24px;
  border-radius: 8px;
  background: ${colors.greenLighter};;
  position: relative;

  p {
    font-size: 20px;
    margin: 0 0 8px 0;
  color: ${colors.text};
  }

  .charge {
      color: ${colors.greenLight};
    font-weight: 500;
  }
`;

export const SettleBtn = styled.button`
  position: absolute;
  right: 36px;
  bottom: 36px;
  background:${colors.green} ;
  border: none;
  color: ${colors.white};
  padding: 16px 64px;
  border-radius: 12px;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0px 5px 20px 0px #42794A33;
  &:hover {
    transform: scale(1.05);
  }
`;
