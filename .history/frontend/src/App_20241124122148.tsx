import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
// import About from "./components/About/About"; // Example of another page
import Footer from "./components/Footer/Footer"; // Assuming you have a Footer component
// import OtpLogin from './components/OTP/OtpLoginVerification';

export default function App() {
  return (
    <Router>
      <Navbar />  {/* Navbar is always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<OtpLogin />} /> */}

      </Routes>
      <Footer />
    </Router>
  );
}
