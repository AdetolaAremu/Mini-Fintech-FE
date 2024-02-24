import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/Auth";
import Private from "./layouts/Private";
import { Provider } from "react-redux";
import { store } from "./store/RootReducer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<AuthLayout />} />
          <Route path="/user/*" element={<Private />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
