import "./App.css";

import SplashFrom from "./pages/SplashFrom";
import SignInForm from "./pages/SignInForm";
import SignUpFom from "./pages/SignUpFom";
import FormRegister from "./components/FormRegister";
import LoginForm from "./components/FormLogin";
import { BrowserRouter as Router, Routes, Route } from "react-router";

function App() {
  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/" element={<SplashFrom />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/signup" element={<SignUpFom />} />
        </Routes>
      </Router> */}
      {/* <FormRegister /> */}
      <LoginForm />
    </>
  );
}

export default App;
