import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import AddActivity from './components/Package/AddActivities';
import ActivityDetails from './components/Package/ActivityDetail';
import NepalPackageDetail from './components/Package/NepalPackageDetail';
import Activities from './components/Package/Activities';
import NepalPackage from './components/Package/NepalPackage';
import InternationalPackage from './components/Package/InternationalPackage';
import InternationalPackageDetail from './components/Package/InternationalPackageDetail';
import Error from './components/ErrorPage/Error';
import AddInternationalPackage from './components/Package/AddInternationalPackages';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/activity/:id" element={<ActivityDetails />} />
        <Route path="/nepalpackage/:id" element={<NepalPackageDetail />} />
        <Route path="/internationalpackage/:id" element={<InternationalPackageDetail />} />

        <Route path="/activities" element={<Activities />} />
        <Route path="/nepalpackages" element={<NepalPackage />} />
        <Route path="/internationalpackages" element={<InternationalPackage />} />

        <Route path="/add-activity" element={<AddActivity />} />
        <Route path="/add-internationalpackage" element={<AddInternationalPackage />} />
        <Route path="/add-nepalpackage" element={<Add />} />

        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}