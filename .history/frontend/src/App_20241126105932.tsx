import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
// import About from "./components/About/About"; // Example of another page
import Footer from "./components/Footer/Footer"; // Assuming you have a Footer component
import P from './P';
import Contactform from './components/Contact/Contactform';

export default function App() {
  return (
    <Router>
      <Navbar />  {/* Navbar is always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/p" element={<P />} />
        <Route path="/contact" element={<Contactform />} />
      </Routes>
      <Footer />
    </Router>
  );
}