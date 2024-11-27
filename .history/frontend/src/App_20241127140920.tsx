import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
// import About from "./components/About/About"; // Example of another page
import Footer from "./components/Footer/Footer"; // Assuming you have a Footer component
import AddActivity from './components/Package/AddActivities';
import ActivityDetails from './components/Package/ActivityDetail';
import ActivitiesList from './components/Package/ActivitiesList';

export default function App() {
  return (
    <Router>
      <Navbar />  {/* Navbar is always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activity/:id" element={<ActivityDetails/>} />        <Route path="/add-activity" element={<AddActivity/>} />
        <Route path="/activities" element={<ActivitiesList/>} />
        {/* <Route path="/nepalpackages" element={<NepalPacka/>} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}