import styled from "styled-components";
import { theme } from "../../styles/theme";

const { colors } = theme;

export const DashboardWrapper = styled.div`
  padding: 16px;
   @media (max-width: 1024px) {
    padding: 20px;
  }

  @media (max-width: 600px) {
    padding: 12px;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-bottom: 20px;

 @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

export const Card = styled.div`
  background: ${colors.greenLighter};
  border-radius: 12px;
  padding: 16px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
   @media (max-width: 1024px) {
    padding: 16px;
  }

  @media (max-width: 600px) {
    padding: 12px;
  }
`;

export const CardIcon = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: 8px;
   @media (max-width: 1024px) {
    width: 56px;
    height: 56px;
  }

  @media (max-width: 600px) {
    width: 48px;
    height: 48px;
  }
`;

export const CardTitle = styled.div`
  font-weight: 600;
  font-size: 24px;
  color: ${colors.green};
  margin-bottom: 4px;
`;

export const CardSubtitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  color:${colors.subtext};
`;

export const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SectionWrapper = styled.div`
  background: ${colors.white};
  border-radius: 12px;
  padding: 16px;
  box-shadow: ${colors.shadow};
`;

export const SectionTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${colors.subtext};
  margin-bottom: 12px;
  text-transform: uppercase;
`;

export const SmallGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const SmallCard = styled.div`
  background: ${colors.white};
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  box-shadow: ${colors.shadow};
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const SmallIcon = styled.img`
  width: 32px;
  height: 32px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 0px 20px 0px #0000000D;
  margin-bottom: 6px;
`;

export const SmallLabel = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.text};
`;
