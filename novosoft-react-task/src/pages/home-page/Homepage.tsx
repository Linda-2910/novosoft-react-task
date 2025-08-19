import React from "react";
import styled from "styled-components";
import Banner from "../../common-components/banner/Banner";
import Dashboard from "../../components/home-dashboard/dashboard";
import bannerIllustration from "../../assets/bill-payment.png";
const PageContainer = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
`;

const HomePage: React.FC = () => {
  return (
    <PageContainer>
      <Content>
        <Banner image={bannerIllustration} alt="QPay POS Device Illustration" />
        <Dashboard />
      </Content>
    </PageContainer>
  );
};

export default HomePage;
