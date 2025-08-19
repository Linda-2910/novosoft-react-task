import React from "react";
import {
  BannerWrapper,
  DownloadButton,
  GradientSection,
  IllustrationWrapper,
  Subtitle,
  Title,
} from "./Banner.styled";
interface BannerProps {
  image: string;
  alt?: string;
}
const Banner: React.FC<BannerProps> = ({ image, alt }) => {
  return (
    <BannerWrapper>
      <GradientSection>
        <Title>
          Pay <span className="highlight">₹1/month*</span> for the{" "}
          <span className="device">QPay POS Device</span>
        </Title>
        <Subtitle>One device for accepting all modes of payments</Subtitle>
        <DownloadButton>Download App Now!</DownloadButton>
      </GradientSection>
      <IllustrationWrapper>
        <img src={image} alt={alt} />
      </IllustrationWrapper>
    </BannerWrapper>
  );
};

export default Banner;
