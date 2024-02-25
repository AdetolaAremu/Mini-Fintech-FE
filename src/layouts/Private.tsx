import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import Home from "../views/private/Home";
import Transaction from "../views/private/Transaction";
import { useSelector } from "react-redux";
import { RootState } from "../store/RootReducer";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { logoutUser } from "../views/auth/actions/action";
import { useAppDispatch } from "../utils/Hook";
import { getBalance, getLoggedInUser } from "../views/private/actions/action";

const Private = () => {
  const allAuths = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getLoggedInUser());
    dispatch(getBalance());

    if (!allAuths) {
      navigate("/");
    } else {
      const token = localStorage.getItem("jwtToken");
      if (token) {
        const decodedToken: any = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp && currentTime > decodedToken.exp) {
          dispatch(logoutUser());
          navigate("/");
        }
      }
    }
  }, [allAuths.isAuthenticated, dispatch, navigate]);
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
