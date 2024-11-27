import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPhone, FaEnvelope, FaCaretDown } from 'react-icons/fa';
import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';

interface Activity {
    id: number;
    activity: string;
}
interface NepalPackage {
    id: number;
    package_name: string;
}

export default function Navbar() {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [nepalpackages, setNepalPackages] = useState<NepalPackage[]>([]);
    const [dropdowns, setDropdowns] = useState({
        activities: false,
        nepalpackages: false,
        internationalpackages: false,
    });

    useEffect(() => {
        axios.get<Activity[]>('http://localhost:5000/api/activities')
            .then(response => setActivities(response.data))
            .catch(error => console.error('Error fetching activities:', error));
    }, []);

    useEffect(() => {
        axios.get<NepalPackage[]>('http://localhost:5000/api/nepalpackages')
            .then(response => setNepalPackages(response.data))
            .catch(error => console.error('Error fetching Nepal packages:', error));
    }, []);

    const handleMouseEnter = (menu: keyof typeof dropdowns) => {
        setDropdowns(prev => ({ ...prev, [menu]: true }));
    };

    const handleMouseLeave = (menu: keyof typeof dropdowns) => {
        setTimeout(() => {
            setDropdowns(prev => ({ ...prev, [menu]: false }));
        }, 500); // Keep visible for 0.5 seconds
    };

    return (
        <>
            <div className="w-full bg-darktheme flex gap-10 px-5 py-2 md:px-24">
                <span className="text-white flex items-center">
                    <FaPhone className="mr-2" /> 0988848484
                </span>
                <span className="text-white flex items-center">
                    <FaEnvelope className="mr-2" /> xyz@gmail.com
                </span>
            </div>

            <header className="text-black body-font w-full z-20 bg-[#2f3c5ae8] text-white">
                <div className="container mx-auto flex flex-wrap p-5 md:px-24 flex-col md:flex-row items-center">
                    <div className="flex title-font font-medium items-center mb-4 md:mb-0 gap-10">
                        <Link to="/">
                            <img src={logo1} alt="" className="h-14 w-auto" />
                        </Link>
                        <Link to="/">
                            <img src={logo2} alt="" className="h-14 w-auto" />
                        </Link>
                    </div>
                    <nav className="md:ml-auto flex flex-wrap items-center justify-center text-base">
                        <Link to="" className="mr-5 hover:text-darkorange transition-all duration-200 ease-in-out">Home</Link>
                        <Link to="" className="mr-5 hover:text-darkorange transition-all duration-200 ease-in-out">About Us</Link>
                        <Link to="" className="mr-5 hover:text-darkorange transition-all duration-200 ease-in-out">Services</Link>

                        <div
                            className="relative mr-5"
                            onMouseEnter={() => handleMouseEnter('activities')}
                            onMouseLeave={() => handleMouseLeave('activities')}
                        >
                            <Link to="#" className="hover:text-darkorange transition-all duration-200 ease-in-out">Activities <FaCaretDown className="inline text-xl font-light" /></Link>
                            {dropdowns.activities && (
                                <div className="absolute left-0 top-full bg-primary text-black shadow-md p-4 z-30 mt-8 whitespace-nowrap w-fit transition-all duration-200 ease-in-out">
                                    <ul>
                                        {activities.map((activity) => (
                                            <li key={activity.id} className="hover:text-darkorange py-1 transition-all duration-200 ease-in-out">
                                                <Link to={`/activity/${activity.id}`}>{activity.activity}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div
                            className="relative mr-5"
                            onMouseEnter={() => handleMouseEnter('internationalpackages')}
                            onMouseLeave={() => handleMouseLeave('internationalpackages')}
                        >
                            <Link to="#" className="hover:text-darkorange transition-all duration-200 ease-in-out">International Packages <FaCaretDown className="inline text-xl font-light" /></Link>
                            {dropdowns.internationalpackages && (
                                <div className="absolute left-0 top-full bg-primary text-black shadow-md p-4 z-30 mt-8 whitespace-nowrap w-fit transition-all duration-200 ease-in-out">
                                    <ul>
                                        {activities.map((activity) => (
                                            <li key={activity.id} className="hover:text-darkorange py-1 transition-all duration-200 ease-in-out">
                                                <Link to={`/activity/${activity.id}`}>{activity.activity}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div
                            className="relative mr-5"
                            onMouseEnter={() => handleMouseEnter('nepalpackages')}
                            onMouseLeave={() => handleMouseLeave('nepalpackages')}
                        >
                            <Link to="#" className="hover:text-darkorange transition-all duration-200 ease-in-out">Nepal Packages <FaCaretDown className="inline text-xl font-light" /></Link>
                            {dropdowns.nepalpackages && (
                                <div className="absolute left-0 top-full bg-primary text-black shadow-md p-4 z-30 mt-8 whitespace-nowrap w-fit transition-all duration-200 ease-in-out">
                                    <ul>
                                        {nepalpackages.map((nepalpackage) => (
                                            <li key={nepalpackage.id} className="hover:text-darkorange py-1 transition-all duration-200 ease-in-out">
                                                <Link to={`/nepalpackage/${nepalpackage.id}`}>{nepalpackage.package_name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <Link to="" className="mr-5 hover:text-darkorange">Blogs</Link>
                    </nav>
                    <button className="inline-flex items-center text-primary bg-darkorange border border-darkorange py-1 px-3 focus:outline-none hover:bg-primary text-lg hover:text-darkorange rounded mt-4 md:mt-0">
                        Download Visa CheckList
                    </button>
                </div>
            </header>
        </>
    );
}
