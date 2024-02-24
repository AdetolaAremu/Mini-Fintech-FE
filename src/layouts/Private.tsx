import { Route, Routes } from "react-router-dom";
import Navbar from "../components/NavBar";
import Home from "../views/private/Home";
import Transaction from "../views/private/Transaction";

const Private = () => {
  return (
    <div className="bg-gray-200 h-screen">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
    </div>
  );
};

export default Private;
