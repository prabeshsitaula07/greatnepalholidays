import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
// import About from "./components/About/About"; // Example of another page
import Footer from "./components/Footer/Footer"; // Assuming you have a Footer component
import AddActivity from './components/Package/AddActivities';

export default function App() {
  return (
    <Router>
      <Navbar />  {/* Navbar is always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activity/:id" element={</>} />
        <Route path="/add-activity" element={<AddActivity/>} />
      </Routes>
      <Footer />
    </Router>
  );
}