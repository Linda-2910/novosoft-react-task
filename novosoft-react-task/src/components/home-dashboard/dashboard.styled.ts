import styled from "styled-components";
import { theme } from "../../styles/theme";

const { colors, radii } = theme;

// ====== LAYOUT WRAPPER ======
export const Page = styled.div`
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  color: ${colors.text};
  background: ${colors.bg};
`;

// ====== STATS STRIP ======
export const StatsStrip = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(160px, 1fr));
  gap: 16px;
  margin-bottom: 24px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(160px, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  background: ${colors.white};
  border: 1px solid ${colors.border};
  border-radius: ${radii.card};
  box-shadow: ${colors.shadow};
  padding: 18px 14px;
  text-align: center;

  .value {
    font-weight: 700;
    font-size: 40px;
    line-height: 100%;
    color: ${colors.green};
    margin-bottom: 6px;

    @media (max-width: 520px) {
      font-size: 32px;
    }
  }
  .label {
    font-size: 20px;
    font-weight: 500;
    color: ${colors.subtext};

    @media (max-width: 520px) {
      font-size: 16px;
    }
  }
`;

// ====== TWO-UP GRID ======
export const TwoUp = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

// ====== CARD ======
export const Card = styled.div`
  background: ${colors.white};
  border: 1px solid ${colors.border};
  box-shadow: ${colors.shadow};
  border-radius: ${radii.card};
  padding: 18px;
`;

// ====== SECTION LABEL ======
export const SectionLabel = styled.div`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${colors.faint};
  margin-bottom: 12px;
`;

// ====== PROGRESS ======
export const ProgressRow = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 14px;

  @media (max-width: 520px) {
    flex-direction: column;
    gap: 12px;
    align-items: center;
  }
`;

export const ProgressWrap = styled.div`
  width: 184px;
  height: 184px;
  position: relative;
  display: grid;
  place-items: center;

  @media (max-width: 520px) {
    width: 150px;
    height: 150px;
  }
`;

export const ProgressText = styled.div`
  position: absolute;
  font-weight: 700;
  color: ${colors.greenLight};
  font-size: 30.27px;

  @media (max-width: 520px) {
    font-size: 24px;
  }
`;

export const Bullets = styled.ul`
  margin: 0;
  padding-left: 18px;
  list-style: disc;
  font-weight: 500;
  color: ${colors.subtext};
  font-size: 20px;

  li + li {
    margin-top: 6px;
  }

  @media (max-width: 520px) {
    font-size: 16px;
    padding-left: 12px;
  }
`;

export const Divider = styled.div`
  height: 1px;
  background: ${colors.border};
  margin: 14px 0;
`;

export const PrimaryBtn = styled.button`
  width: 100%;
  border: none;
  background: ${colors.green};
  color: ${colors.white};
  border-radius: ${radii.btn};
  padding: 12px 14px;
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0px 5px 20px 0px #42794A33;
  transition: background 0.15s ease;

  &:hover {
    background: ${colors.greenDark};
  }

  @media (max-width: 520px) {
    font-size: 18px;
  }
`;

export const GridHeader = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0%;
  margin-bottom: 6px;

  @media (max-width: 520px) {
    font-size: 16px;
  }
`;

// ====== QR CARD ======
export const QRRow = styled.div`
  display: grid;
  grid-template-columns: 184px 1fr;
  gap: 18px;
  align-items: center;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    text-align: center;
    justify-items: center;
  }
`;

export const QRBox = styled.img`
  width: 184px;
  height: 184px;
  border-radius: 8px;

  @media (max-width: 520px) {
    width: 150px;
    height: 150px;
  }
`;

// ====== BOTTOM LISTS ======
export const BottomTwo = styled(TwoUp)``;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.subtext};
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.12em;
  margin-bottom: 10px;

  .amount {
    display: block;
    color: ${colors.text};
    font-weight: 600;
    font-size: 20px;
    margin-top: 4px;
    text-transform: none;
    letter-spacing: 0;

    @media (max-width: 520px) {
      font-size: 16px;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 2px;
  color: ${colors.text};
  font-size: 20px;
  font-weight: 600;

  & + & {
    border-top: 1px solid ${colors.border};
  }

  .meta {
    color: ${colors.subtext};
    font-size: 20px;
    font-weight: 500;
    margin-top: 2px;

    @media (max-width: 520px) {
      font-size: 16px;
    }
  }

  @media (max-width: 520px) {
    font-size: 16px;
    flex-direction: column;
    gap: 4px;
    align-items: flex-start;
  }
`;

export const GhostBtn = styled(PrimaryBtn)`
  background: ${colors.green};
  margin-top: 12px;
`;
