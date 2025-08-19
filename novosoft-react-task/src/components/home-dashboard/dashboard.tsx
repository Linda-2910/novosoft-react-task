import React from "react";
import { FiChevronRight } from "react-icons/fi";
import QRCode from "../../assets/qr.png";
import { theme } from "../../styles/theme";
import { Page, StatsStrip, StatCard, TwoUp, Card, SectionLabel, ProgressRow, ProgressWrap, ProgressText, GridHeader, Bullets, Divider, PrimaryBtn, QRRow, QRBox, BottomTwo, ListHeader, Row } from "./dashboard.styled";
import { useNavigate } from "react-router-dom";

const { colors } = theme;

// ====== PROGRESS SVG ======
const ProgressCircle: React.FC<{ value: number }> = ({ value }) => {
  const size = 150;
  const stroke = 15;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - value / 100);

  return (
    <svg width={size} height={size}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="#E6EAE6"
        strokeWidth={stroke}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={colors.greenLight}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={offset}
        style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%", transition: "stroke-dashoffset .4s ease" }}
      />
    </svg>
  );
};

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Page>
      {/* STATS */}
      <StatsStrip>
        <StatCard>
          <div className="value">1.5k</div>
          <div className="label">Account Holders</div>
        </StatCard>
        <StatCard>
          <div className="value">2.1k</div>
          <div className="label">Transactions</div>
        </StatCard>
        <StatCard>
          <div className="value">2.3k</div>
          <div className="label">Settlement</div>
        </StatCard>
        <StatCard>
          <div className="value">45k</div>
          <div className="label">QR Orders</div>
        </StatCard>
      </StatsStrip>

      {/* PROFILE + QR */}
      <TwoUp>
        <Card>
          <SectionLabel>Profile</SectionLabel>
          <ProgressRow>
            <ProgressWrap>
              <ProgressCircle value={30} />
              <ProgressText>30%</ProgressText>
            </ProgressWrap>
            <div>
              <GridHeader>Complete your profile</GridHeader>
              <Bullets>
                <li>Personal KYC</li>
                <li>Company KYC</li>
                <li>Onboarding details</li>
              </Bullets>
            </div>
          </ProgressRow>
          <Divider />
          <PrimaryBtn>Next</PrimaryBtn>
        </Card>

        <Card>
          <SectionLabel>QR</SectionLabel>
          <QRRow>
            <QRBox src={QRCode} alt="QR Code" />
            <div>
              <GridHeader>Order QR</GridHeader>
              <Bullets>
                <li>Receive Payment</li>
                <li>Order new QRs</li>
                <li>Download QR</li>
              </Bullets>
            </div>
          </QRRow>
          <Divider />
          <PrimaryBtn onClick={() => navigate("/qr")}>View more</PrimaryBtn>
        </Card>
      </TwoUp>

      {/* SETTLEMENT + TRANSACTIONS */}
      <BottomTwo>
        <Card>
          <ListHeader>
            <div>
              Settlement
              <span className="amount">₹1,23,816.19</span>
            </div>
            <FiChevronRight size={20} color={colors.text} />
          </ListHeader>

          {[1, 2, 3].map((i) => (
            <Row key={i}>
              <div>
                Ibrahim
                <div className="meta">23 Oct, 09:15 AM</div>
              </div>
              <div>+₹90</div>
            </Row>
          ))}

          <PrimaryBtn
            onClick={() => {
              navigate("/history/transactions");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Settle Now
          </PrimaryBtn>
        </Card>

        <Card>
          <ListHeader>
            <div>
              Total Transactions
              <span className="amount">₹1,23,816.19</span>
            </div>
            <FiChevronRight size={20} color={colors.text} />
          </ListHeader>

          {[1, 2, 3].map((i) => (
            <Row key={i}>
              <div>
                Ibrahim
                <div className="meta">23 Oct, 09:15 AM</div>
              </div>
              <div>+₹90</div>
            </Row>
          ))}

          <PrimaryBtn>View All</PrimaryBtn>
        </Card>
      </BottomTwo>
    </Page>
  );
};

export default Dashboard;
