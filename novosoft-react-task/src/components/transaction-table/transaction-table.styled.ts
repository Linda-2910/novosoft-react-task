import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/theme";

const { colors } = theme;
export const PageWrapper = styled.div`
  padding: 24px;
  background: #fff;
   @media (max-width: 768px) {
    padding:16px 64px;
  }
  @media (max-width: 480px) {
    padding:54px 16px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  h2 {
    font-size: 32px;
    font-weight: 700;
    margin: 0;
     @media (max-width: 768px) {
      font-size: 24px;
    }
    @media (max-width: 480px) {
      font-size: 20px;
    }
  }

  button {
    border: 1px solid ${colors.green};
    color: ${colors.green};
    background: transparent;
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
     @media (max-width: 768px) {
      font-size: 16px;
      padding: 6px 12px;
    }
    @media (max-width: 480px) {
      font-size: 14px;
      padding: 4px 10px;
    }
  }
`;
export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  width: 100%;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;
export const FilterButton = styled.img`
  width: 48px;
  height: 48px;
  cursor: pointer;
   @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;
export const Banner = styled.div`
  display: flex;
  justify-content: flex-start;
  gap:16px;
  align-items: center;
  background: ${colors.greenBanner};
  border: 1px solid ${colors.greenLighter};
  border-radius: 12px;
  padding: 14px 18px;
  margin-bottom: 20px;

  p {
    margin: 0;
    font-size: 16px;
    color:${colors.subtext};
    font-weight: 700;
     @media (max-width: 480px) {
      font-size: 14px;
    }
    span {
      color:${colors.green} ;
    }
  }

button {
  background: ${colors.green};
  border: none;
  color: #fff;
  padding: 12px 18px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 8px;

  transition: transform 0.2s ease, box-shadow 0.2s ease; 

    @media (max-width: 768px) {
      font-size: 16px;
      padding: 10px 14px;
    }
    @media (max-width: 480px) {
      font-size: 14px;
      padding: 8px 12px;
    }
  img {
    width: 30px;
    height: 24px;
      @media (max-width: 480px) {
        width: 24px;
        height: 20px;
      }
  }
}

button:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); 
}

`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Th = styled.th`
  text-align: left;
  padding: 12px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 12%;
  color:${colors.subtext};
  border-bottom: 1px solid ${colors.grey};
   @media (max-width: 480px) {
    padding: 8px;
    font-size: 12px;
  }
`;
export const Td = styled.td`
  padding: 12px;
  font-size: 20px;
  font-weight: 600;
  border-bottom: 1px solid ${colors.grey};
   @media (max-width: 480px) {
    padding: 8px;
    font-size: 12px;
  }
`;
export const ViewLink = styled.span`
  color: ${colors.green};
  text-decoration: underline;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    opacity: 0.8; 
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const FromText = styled.span`
  font-weight: 500;
  color: ${colors.subtext};
  margin-right: 6px;
  
`;
export const Status = styled.span<{ status: string }>`
  padding: 2px 10px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid
    ${({ status }) =>
        status === "SUCCESS"
            ? colors.status.success : status === "FAILED"
                ? colors.status.failed
                : colors.status.pending};
  color: ${({ status }) =>
        status === "SUCCESS"
            ? colors.status.success : status === "FAILED"
                ? colors.status.failed
                : colors.status.pending};
  background: transparent;
  min-width: 70px;
  text-align: center;
     @media (max-width: 480px) {
    padding: 8px;
    font-size: 12px;
  }
`;

export const WalletImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 6px;
    @media (max-width: 480px) {
    width: 16px;
    height: 16px;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;

  button {
    border: 1px solid #ddd;
    background: #fff;
    padding: 6px 10px;
    margin: 0 4px;
    border-radius: 6px;
    cursor: pointer;
  }

  .active {
    background: ${colors.greenLight};
    color: white;
  }
    @media (max-width: 480px) {
      padding: 4px 6px;
      font-size: 12px;
    }

`;

// ---------- Skeleton Loader ----------
export const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const SkeletonBox = styled.div`
  height: 14px;
  width: 100%;
  background: linear-gradient(90deg, #eee, #f5f5f5, #eee);
  background-size: 200% 100%;
  border-radius: 6px;
  animation: ${shimmer} 1.2s infinite;
   @media (max-width: 480px) {
    height: 12px;
  }
`;

export const SkeletonRow = styled.tr`
  td {
    padding: 12px;
  }
`;