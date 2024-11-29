import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
// import About from "./components/About/About"; // Example of another page
import Footer from "./components/Footer/Footer"; // Assuming you have a Footer component
import AddActivity from './components/Package/AddActivities';
import ActivityDetails from './components/Package/ActivityDetail';
// import ActivitiesList from './components/Package/ActivitiesList';
import NepalPackageDetail from './components/Package/NepalPackageDetail';
import Activities from './components/Package/Activities';
import NepalPackage from './components/Package/NepalPackage';
import InternationalPackage from './components/Package/InternationalPackage';
import InternationalPackageDetail from './components/Package/InternationalPackageDetail';
import A from './components/Package/a';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activity/:id" element={<ActivityDetails />} />
        <Route path="/nepalpackage/:id" element={<NepalPackageDetail />} />
        <Route path="/internationalpackage/:id" element={<InternationalPackageDetail />} />
        <Route path="/add-activity" element={<AddActivity />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/nepalpackages" element={<NepalPackage />} />
        <Route path="/internationalpackages" element={<InternationalPackage />} />
        <Route path="/a" element={<A />} />
      </Routes>
      <Footer />
    </Router>
  );
}