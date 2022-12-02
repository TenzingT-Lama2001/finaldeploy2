import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Login from "./pages/Login";
import Home from "./pages/Home";

import Error from "./pages/Error";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import ForgotByMail from "./sections/ForgotByMail";
import ForgotBySms from "./sections/ForgotBySms";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/*public routes */}
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="register" element={<SignUp />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="forgot-by-email" element={<ForgotByMail />} />
      <Route path="forgot-by-sms" element={<ForgotBySms />} />
    </Routes>
  );
}

export default App;
