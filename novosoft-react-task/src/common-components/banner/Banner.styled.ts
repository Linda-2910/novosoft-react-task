import styled from "styled-components";
import { theme } from "../../styles/theme";

const { colors } = theme;
export const BannerWrapper = styled.div`
  width: 97%;
  border-radius: 12px;
  margin: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${colors.white}; 
 border: 2px solid  ${colors.green};
  @media (max-width: 1024px) {
    width: 95%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 20px;
    margin: 12px auto;
  }
`;

export const GradientSection = styled.div`
  flex: 1;
  padding:60px;
  color:  ${colors.white};
  position: relative;
  background: radial-gradient(100% 533.55% at 100% 0%,  ${colors.greenLight} 0%,  ${colors.green} 100%);
  clip-path: polygon(0 0, 95% 0, 75% 100%, 0% 100%); 
 @media (max-width: 1024px) {
    padding: 40px;
  }

  @media (max-width: 768px) {
    clip-path: none;
    width: 100%;
    padding: 24px;
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 400;
  margin: 0;

  .highlight,
  .device {
    font-weight: 700;
  }

  @media (max-width: 1024px) {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Subtitle = styled.p`
  font-size: 14px;
  margin: 10px 0 20px;
  font-weight: 400;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const DownloadButton = styled.button`
  background: ${colors.white};
  color:  ${colors.green};
  font-weight: 600;
  font-size: 14px;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background:  ${colors.statTint};
  }
  @media (max-width: 768px) {
    font-size: 13px;
    padding: 8px 16px;
  }

`;

export const IllustrationWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 260px;
    height: auto;
  }

 @media (max-width: 1024px) {
    img {
      max-width: 220px;
    }
  }

  @media (max-width: 768px) {
    margin-top: 16px;
    img {
      max-width: 180px;
    }
  }
`;

