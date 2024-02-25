import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import Home from "../views/private/Home";
import Transaction from "../views/private/Transaction";
import { useSelector } from "react-redux";
import { RootState } from "../store/RootReducer";

const Private = () => {
  const allAuths = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  // Check if the user is authenticated
  if (!allAuths.user) {
    // Redirect to the login page if the user is not authenticated
    navigate("/");
    // Return null to prevent rendering the rest of the component
    return null;
  }
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
