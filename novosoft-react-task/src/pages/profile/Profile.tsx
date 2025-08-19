import React from "react";
import styled from "styled-components";
import ProfileBanner from "../../assets/profile-banner.png";
import Banner from "../../common-components/banner/Banner";
import Dashboard from "../../components/profile-dashboard/profile-dashboard";
const PageContainer = styled.div`
  display: flex;
`;
const Content = styled.div`
  flex: 1;
`;
const Profile: React.FC = () => {
  return (
    <PageContainer>
      <Content>
        <Banner image={ProfileBanner} alt="QPay POS Device Illustration" />
        <Dashboard />
      </Content>
    </PageContainer>
  );
};

export default Profile;
