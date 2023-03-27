import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MainPage from "./components/mainPage/MainPage";
import Register from "./components/Register/Register";
import { Link, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import Checkout from "./components/Checkout/Checkout";
function App() {
  const [user, setUser] = useState(false);



  return (
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<ProtectedRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
      <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<Register />} />
        </Route>
        <Route path="/home" element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/checkout" element={<PrivateRoute />}>
          <Route path="/checkout" element={<Checkout/>} />
        </Route>
        <Route path="/main" element={<PrivateRoute />}>
          <Route path="/main" element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
