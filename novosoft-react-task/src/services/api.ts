import axios from "axios";

const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMjgyMDUiLCJtb2JpbGUiOiI3MzU4MjIxMzU0IiwiYXBwX2lkIjoiNjAiLCJtaWQiOiIzNDgiLCJ0b2tlbiI6IjZjZjFhMzNhZDJkOGQyNjFkMWYwNDBiMWIwZGViMjc1IiwiZ3JvdXBJZCI6IjIxMDYxIiwiaXNzIjoiMjgyMDUifQ.ADopz72M1Z-eKpFXJd04RZvLxXHyJ8fFaT4HnzxxQCk";

const API_BASE =
  import.meta.env.MODE === "development"
    ? "/api"
    : "https://64.227.189.27/wallet/api/v1"; // Prod API base

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const fetchTransactions = async (serviceId: number, page: number) => {
  try {
    const res = await api.get("/transaction_history", {
      params: { service_id: serviceId, page },
    });
    return res.data;
  } catch (err: any) {
    console.error("API error:", err.response?.data || err.message);
    throw err;
  }
};
