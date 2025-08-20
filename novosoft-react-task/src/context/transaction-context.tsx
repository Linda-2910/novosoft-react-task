import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchTransactions } from "../services/api";

export interface Wallet {
  id: number;
  name: string;
  image: string;
}

export interface Transaction {
  transaction_id: string;
  amount: string;
  status: string;
  updated_date: string;
  wallet: Wallet;
}

interface TransactionContextType {
  transactions: Transaction[];
  loading: boolean;
  error: string | null;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  pageNumber: number;
  fetchPage: (p: number) => void;
}

const TransactionContext = createContext<TransactionContextType | undefined>(
  undefined
);

export const TransactionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const res = await fetchTransactions(111, page - 1);

        setTransactions(res.data || []);
        setTotalPages(res.totalPages || 1);
      } catch (err) {
        console.error(err);
        setError("Failed to load transactions");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [page]);

  const fetchPage = (p: number) => setPage(p);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        loading,
        error,
        page,
        setPage,
        totalPages,
        pageNumber: page,
        fetchPage,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => {
  const ctx = useContext(TransactionContext);
  if (!ctx)
    throw new Error("useTransactions must be used inside TransactionProvider");
  return ctx;
};
