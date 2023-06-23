import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DashBoard, SignIn, SignUp } from "./pages";
import { AuthContext } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";

const App = () => {
  // current user details through useContext
  const { currentUser } = useContext(AuthContext);

  // protected route for not logged users
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to={"/"} />;
    }
    return children;
  };
  return (
    <>
      <BrowserRouter>
        <ToastContainer>
          <Routes>
            <Route exact path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashBoard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </ToastContainer>
      </BrowserRouter>
    </>
  );
};

export default App;
