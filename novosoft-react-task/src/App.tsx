import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import AppRoutes from "./routes/app-routes";
import { TransactionProvider } from "./context/transaction-context";

function App() {
  return (
    <>
      <BrowserRouter>
        <TransactionProvider>
          <Navbar />
          <div style={{ display: "flex", minHeight: "100vh" }}>
            <Sidebar />
            <div
              style={{
                flex: 1,
                marginLeft: window.innerWidth > 480 ? "300px" : "0",
              }}
            >
              <AppRoutes />
            </div>
          </div>
          <ToastContainer position="bottom-right" autoClose={3000} />
        </TransactionProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
