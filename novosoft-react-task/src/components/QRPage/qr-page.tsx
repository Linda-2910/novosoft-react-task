import { useState } from "react";
import ClipboardIcon from "../../assets/copy.svg";
import DownloadIcon from "../../assets/download.svg";
import LogoImage from "../../assets/logo.svg";
import QRCodeImage from "../../assets/qr.png";
import ShareIcon from "../../assets/share.svg";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import CheckIcon from "../../assets/check.svg";
import {
  ActionBtn,
  ArrowWrapper,
  ButtonRow,
  Container,
  FooterBtn,
  Header,
  LeftCard,
  Logo,
  QRCode,
  QRDetails,
  QRItem,
  QRLabel,
  QRList,
  QRSubtitle,
  QRTitle,
  RightCard,
  SmallQR,
  StatusBox,
  StatusCircle,
  StatusContent,
  StatusHeader,
  StatusLabel,
  StatusStep,
  StatusWrapper,
  Tab,
  TabsWrapper,
  UPIText,
  UserName,
} from "./qr-page.styled";

const QRPage = () => {
  const [activeTab, setActiveTab] = useState<"active" | "requests">("active");
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});
  return (
    <>
      <Header>Manage QR/POS</Header>
      <Container>
        {/* Left QR Card */}
        <LeftCard>
          <Logo src={LogoImage} alt="Pay Logo" />
          <QRCode src={QRCodeImage} alt="QR Code" />
          <UPIText>
            UPI ID: 9876543210@qpay <img src={ClipboardIcon} alt="copy" />
          </UPIText>
          <UserName>Ibrahim Mohammedali</UserName>

          <ButtonRow>
            <ActionBtn>
              <img src={DownloadIcon} alt="download" />
              Download
            </ActionBtn>
            <ActionBtn>
              <img src={ShareIcon} alt="share" />
              Share
            </ActionBtn>
          </ButtonRow>
        </LeftCard>

        {/* Right Column */}
        <RightCard>
          <TabsWrapper>
            <Tab
              active={activeTab === "active"}
              onClick={() => setActiveTab("active")}
            >
              Active QR Codes
            </Tab>
            <Tab
              active={activeTab === "requests"}
              onClick={() => setActiveTab("requests")}
            >
              QR Code Requests
            </Tab>
          </TabsWrapper>
          {activeTab === "active" && (
            <QRList>
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <QRItem key={i}>
                    <SmallQR src={QRCodeImage} alt="QR" />
                    <QRDetails>
                      <QRTitle>Q201946579</QRTitle>
                      <QRSubtitle>
                        All Marketing Sales – MS197030415533164980231
                      </QRSubtitle>
                      <QRLabel>Terminal 3</QRLabel>
                    </QRDetails>
                    <ArrowWrapper>
                      <FiChevronRight size={20} />
                    </ArrowWrapper>
                  </QRItem>
                ))}
            </QRList>
          )}
          {activeTab === "requests" && (
            <QRList>
              {Array(2)
                .fill(0)
                .map((_, i) => (
                  <div key={i}>
                    <QRItem>
                      <SmallQR src={QRCodeImage} alt="QR" />
                      <QRDetails>
                        <QRTitle>All Marketing Sales</QRTitle>
                        <QRSubtitle>
                          45, Bharathi Nagar, VOC Port Authority, Tuticorin,
                          628004.
                        </QRSubtitle>
                        <QRLabel>Requested on 26.04.2024</QRLabel>
                      </QRDetails>
                    </QRItem>
                    <StatusBox>
                      <StatusHeader
                        onClick={() =>
                          setExpanded((prev) => ({
                            ...prev,
                            [i]: !prev[i],
                          }))
                        }
                      >
                        <div>
                          <img
                            src={CheckIcon}
                            alt="checked"
                            width={20}
                            height={20}
                          />
                          <StatusLabel active>QR Request Accepted</StatusLabel>
                        </div>
                        <ArrowWrapper>
                          {expanded[i] ? (
                            <FiChevronDown size={20} />
                          ) : (
                            <FiChevronRight size={20} />
                          )}
                        </ArrowWrapper>
                      </StatusHeader>
                      <StatusWrapper expanded={!!expanded[i]}>
                        <StatusContent>
                          <StatusStep>
                            <StatusCircle />
                            <StatusLabel>Awaiting Production</StatusLabel>
                          </StatusStep>
                          <StatusStep>
                            <StatusCircle />
                            <StatusLabel>Awaiting Dispatch</StatusLabel>
                          </StatusStep>
                          <StatusStep>
                            <StatusCircle />
                            <StatusLabel>Awaiting Delivery</StatusLabel>
                          </StatusStep>
                        </StatusContent>
                      </StatusWrapper>
                    </StatusBox>
                  </div>
                ))}
            </QRList>
          )}

          <FooterBtn>Request more QR Codes</FooterBtn>
        </RightCard>
      </Container>
    </>
  );
};

export default QRPage;
