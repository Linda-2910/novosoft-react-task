import axios from 'axios';

const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMjgyMDUiLCJtb2JpbGUiOiI3MzU4MjIxMzU0IiwiYXBwX2lkIjoiNjAiLCJtaWQiOiIzNDgiLCJ0b2tlbiI6IjZjZjFhMzNhZDJkOGQyNjFkMWYwNDBiMWIwZGViMjc1IiwiZ3JvdXBJZCI6IjIxMDYxIiwiaXNzIjoiMjgyMDUifQ.ADopz72M1Z-eKpFXJd04RZvLxXHyJ8fFaT4HnzxxQCk";

const api = axios.create({
    baseURL: '/api',
    headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

export const fetchTransactions = async (serviceId: number, page: number) => {
    try {
        const res = await api.get('/transaction_history', {
            params: { service_id: serviceId, page },
        });
        return res.data;
    } catch (err: any) {
        console.error('API error:', err.response?.data || err.message);
        throw err;
    }
};
