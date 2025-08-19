import React from "react";
import {
  DashboardWrapper,
  CardGrid,
  Card,
  CardIcon,
  CardTitle,
  CardSubtitle,
  SectionContainer,
  SectionWrapper,
  SectionTitle,
  SmallGrid,
  SmallCard,
  SmallIcon,
  SmallLabel,
} from "./profile-dashboard.styled";
import BankIcon from "../../assets/bank.svg";
import ProfileIcon from "../../assets/bussiness-profile.svg";
import KycIcon from "../../assets/kyc.svg";
import QrIcon from "../../assets/order-qr.svg";
import SpeakerIcon from "../../assets/speaker.svg";
import PosIcon from "../../assets/pos.svg";
import PaymentIcon from "../../assets/payment.svg";
import StaffIcon from "../../assets/staff.svg";
import LanguageIcon from "../../assets/language.svg";

const Dashboard: React.FC = () => {
  return (
    <DashboardWrapper>
      <CardGrid>
        <Card>
          <CardIcon src={BankIcon} alt="Bank" />
          <CardTitle>XXXX 9820</CardTitle>
          <CardSubtitle>ICICI Bank | Chennai Egmore Branch</CardSubtitle>
        </Card>
        <Card>
          <CardIcon src={ProfileIcon} alt="Profile" />
          <CardTitle>Business Profile</CardTitle>
          <CardSubtitle>View and edit your business details</CardSubtitle>
        </Card>
        <Card>
          <CardIcon src={KycIcon} alt="KYC" />
          <CardTitle>KYC Verification</CardTitle>
          <CardSubtitle>Unlock exclusive benefits with KYC</CardSubtitle>
        </Card>
        <Card>
          <CardIcon src={QrIcon} alt="QR" />
          <CardTitle>Order QR</CardTitle>
          <CardSubtitle>Get paid, manage & order QRs</CardSubtitle>
        </Card>
      </CardGrid>

      <SectionContainer>
        <SectionWrapper>
          <SectionTitle>Business services</SectionTitle>
          <SmallGrid>
            <SmallCard>
              <SmallIcon src={SpeakerIcon} alt="Smart Speaker" />
              <SmallLabel>Smart Speaker</SmallLabel>
            </SmallCard>
            <SmallCard>
              <SmallIcon src={PosIcon} alt="POS Machine" />
              <SmallLabel>POS Machine</SmallLabel>
            </SmallCard>
          </SmallGrid>
        </SectionWrapper>

        <SectionWrapper>
          <SectionTitle>Manage Business</SectionTitle>
          <SmallGrid>
            <SmallCard>
              <SmallIcon src={PaymentIcon} alt="Payment Settings" />
              <SmallLabel>Payment Settings</SmallLabel>
            </SmallCard>
            <SmallCard>
              <SmallIcon src={StaffIcon} alt="Manage Staff" />
              <SmallLabel>Manage Staff</SmallLabel>
            </SmallCard>
            <SmallCard>
              <SmallIcon src={LanguageIcon} alt="Change Language" />
              <SmallLabel>Change Language</SmallLabel>
            </SmallCard>
          </SmallGrid>
        </SectionWrapper>
      </SectionContainer>
    </DashboardWrapper>
  );
};

export default Dashboard;
