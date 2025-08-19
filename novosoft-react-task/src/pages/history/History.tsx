import React from "react";
import styled from "styled-components";
import TransactionTable from "../../components/transaction-table/transaction-table";

const Wrapper = styled.div`
  padding: 20px;
`;
const SettlementHistory: React.FC = () => {
  return (
    <Wrapper>
      <TransactionTable />
    </Wrapper>
  );
};

export default SettlementHistory;
