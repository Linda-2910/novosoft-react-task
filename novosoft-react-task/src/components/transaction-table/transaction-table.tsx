import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FilterIcon from "../../assets/filter.png";
import PaginationControls from "../../common-components/pagination/pagination";
import { SearchBar } from "../../common-components/search/search";
import ClockIcon from "../../assets/clock.svg";
import Button from "../../assets/button-clock.svg";
import { useTransactions } from "../../context/transaction-context";
import {
  Banner,
  FilterButton,
  FromText,
  Header,
  PageWrapper,
  SearchContainer,
  SkeletonBox,
  SkeletonRow,
  Status,
  Table,
  Td,
  Th,
  ViewLink,
  WalletImg,
} from "./transaction-table.styled";
import SettlementPopup from "../settlement-popup/settlement-popup";
const TransactionPage: React.FC = () => {
  const { transactions, loading, error, totalPages, pageNumber, fetchPage } =
    useTransactions();
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  if (error) {
    toast.error("Something went wrong. Please try later!");
  }

  return (
    <PageWrapper>
      <Header>
        <h2>Settlement History</h2>
        <button>Download statement</button>
      </Header>
      <SearchContainer>
        <SearchBar
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e: any) => setSearch(e.target.value)}
        />
        <FilterButton src={FilterIcon} alt="Filter" />
      </SearchContainer>
      <Banner>
        <img src={ClockIcon} alt="Clock" />
        <p>
          Today’s total collection will be auto-settled by{" "}
          <span>08:00AM, 23rd Oct’22</span> Tomorrow.
        </p>
        <button onClick={() => setOpen(true)}>
          {" "}
          <img src={Button} alt="clock" />
          Settle Now !
        </button>
      </Banner>

      <Table>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Date & Time</Th>
            <Th>Account</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
            <Th>Details</Th>
          </tr>
        </thead>
        <tbody>
          {loading
            ? Array.from({ length: 6 }).map((_, idx) => (
                <SkeletonRow key={idx}>
                  <Td>
                    <SkeletonBox />
                  </Td>
                  <Td>
                    <SkeletonBox />
                  </Td>
                  <Td>
                    <SkeletonBox />
                  </Td>
                  <Td>
                    <SkeletonBox />
                  </Td>
                  <Td>
                    <SkeletonBox />
                  </Td>
                  <Td>
                    <SkeletonBox />
                  </Td>
                </SkeletonRow>
              ))
            : transactions.map((tx) => (
                <tr key={tx.transaction_id}>
                  <Td>Lisa</Td>
                  <Td>
                    {new Date(tx.updated_date).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </Td>
                  <Td>
                    <FromText>From</FromText>{" "}
                    <WalletImg src={tx.wallet.image} alt={tx.wallet.name} />
                  </Td>

                  <Td>₹{Number(tx.amount).toLocaleString()}</Td>
                  <Td>
                    <Status status={tx.status}>{tx.status}</Status>
                  </Td>
                  <Td>
                    <ViewLink>View</ViewLink>
                  </Td>
                </tr>
              ))}
        </tbody>
      </Table>
      <PaginationControls
        totalPages={totalPages}
        currentPage={pageNumber}
        onPageChange={fetchPage}
      />
      {open && <SettlementPopup onClose={() => setOpen(false)} />}
    </PageWrapper>
  );
};

export default TransactionPage;
