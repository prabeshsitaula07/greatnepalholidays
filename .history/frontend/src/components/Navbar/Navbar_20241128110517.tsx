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
interface InternationalPackage {
    id: number;
    package_name: string;
}

export default function Navbar() {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [nepalpackages, setNepalPackages] = useState<NepalPackage[]>([]);
    const [internationalpackages, setInternationalPackages] = useState<InternationalPackage[]>([]);

    useEffect(() => {
        axios.get<Activity[]>('http://localhost:5000/api/activities')
            .then(response => setActivities(response.data))
            .catch(error => console.error('There was an error fetching the activities!', error));
    }, []);

    useEffect(() => {
        axios.get<NepalPackage[]>('http://localhost:5000/api/nepalpackages')
            .then(response => setNepalPackages(response.data))
            .catch(error => console.error('There was an error fetching the Nepal packages!', error));
    }, []);
    
    useEffect(() => {
        axios.get<NepalPackage[]>('http://localhost:5000/api/nepalpackages')
            .then(response => setNepalPackages(response.data))
            .catch(error => console.error('There was an error fetching the Nepal packages!', error));
    }, []);

    const [isScrolled, setIsScrolled] = useState(false);
    const [dropdownVisibility, setDropdownVisibility] = useState({
        activities: false,
        international: false,
        nepal: false,
    });

    const handleMouseEnter = (dropdown: keyof typeof dropdownVisibility) => {
        setDropdownVisibility(prev => ({ ...prev, [dropdown]: true }));
    };

    const handleMouseLeave = (dropdown: keyof typeof dropdownVisibility) => {
        setTimeout(() => {
            setDropdownVisibility(prev => ({ ...prev, [dropdown]: false }));
        }, 100);
    };

    const handleListMouseEnter = (dropdown: keyof typeof dropdownVisibility) => {
        setDropdownVisibility(prev => ({ ...prev, [dropdown]: true }));
    };

    const handleListMouseLeave = (dropdown: keyof typeof dropdownVisibility) => {
        setTimeout(() => {
            setDropdownVisibility(prev => ({ ...prev, [dropdown]: false }));
        }, 100);
    };

    // Detect scroll and update navbar background and position
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className='w-full bg-darktheme flex gap-10 px-5 py-2 md:px-24'>
                <span className='text-white flex items-center'>
                    <FaPhone className="mr-2" /> 0988848484
                </span>
                <span className='text-white flex items-center'>
                    <FaEnvelope className="mr-2" /> xyz@gmail.com
                </span>
            </div>

            <header
                className={`text-black body-font w-full z-20 transition-all duration-300 ${isScrolled ? 'fixed top-0 bg-primary shadow-md' : 'bg-[#2f3c5ae8] text-white'}`}
            >
                <div className="container mx-auto flex flex-wrap p-5 md:px-24 flex-col md:flex-row items-center">
                    <div className="flex title-font font-medium items-center mb-4 md:mb-0 gap-10">
                        <Link to='/'>
                            <img src={logo1} alt="" className='h-14 w-auto' />
                        </Link>
                        <Link to='/'>
                            <img src={logo2} alt="" className='h-14 w-auto' />
                        </Link>
                    </div>
                    <nav className="md:ml-auto flex flex-wrap items-center justify-center text-base">
                        <Link to='' className="mr-5 hover:text-darkorange">Home</Link>
                        <Link to='' className="mr-5 hover:text-darkorange">About Us</Link>
                        <Link to='' className="mr-5 hover:text-darkorange">Services</Link>

                        {/* Activities Dropdown */}
                        <div
                            className="relative mr-5"
                            onMouseEnter={() => handleMouseEnter('activities')}
                            onMouseLeave={() => handleMouseLeave('activities')}
                        >
                            <Link to="#" className="hover:text-darkorange">
                                Activities <FaCaretDown className="inline text-xl font-light" />
                            </Link>
                            {dropdownVisibility.activities && (
                                <div
                                    className="absolute left-0 top-full bg-primary text-black shadow-md p-4 z-30 mt-2 lg:mt-8 whitespace-nowrap w-fit"
                                    onMouseEnter={() => handleListMouseEnter('activities')}
                                    onMouseLeave={() => handleListMouseLeave('activities')}
                                >
                                    <ul>
                                        {activities.map((activity) => (
                                            <li key={activity.id} className="hover:text-darkorange py-1">
                                                <Link to={`/activity/${activity.id}`}>{activity.activity}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* International Packages Dropdown */}
                        <div
                            className="relative mr-5"
                            onMouseEnter={() => handleMouseEnter('international')}
                            onMouseLeave={() => handleMouseLeave('international')}
                        >
                            <Link to="#" className="hover:text-darkorange">
                                International Packages <FaCaretDown className="inline text-xl font-light" />
                            </Link>
                            {dropdownVisibility.international && (
                                <div
                                    className="absolute left-0 top-full bg-primary text-black shadow-md p-4 z-30 mt-2 lg:mt-8 whitespace-nowrap w-fit"
                                    onMouseEnter={() => handleListMouseEnter('international')}
                                    onMouseLeave={() => handleListMouseLeave('international')}
                                >
                                    <ul>
                                        {activities.map((activity) => (
                                            <li key={activity.id} className="hover:text-darkorange py-1">
                                                <Link to={`/activity/${activity.id}`}>{activity.activity}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Nepal Packages Dropdown */}
                        <div
                            className="relative mr-5"
                            onMouseEnter={() => handleMouseEnter('nepal')}
                            onMouseLeave={() => handleMouseLeave('nepal')}
                        >
                            <Link to="#" className="hover:text-darkorange">
                                Nepal Packages <FaCaretDown className="inline text-xl font-light" />
                            </Link>
                            {dropdownVisibility.nepal && (
                                <div
                                    className="absolute left-0 top-full bg-primary text-black shadow-md p-4 z-30 mt-2 lg:mt-8 whitespace-nowrap w-fit"
                                    onMouseEnter={() => handleListMouseEnter('nepal')}
                                    onMouseLeave={() => handleListMouseLeave('nepal')}
                                >
                                    <ul>
                                        {nepalpackages.map((nepalpackage) => (
                                            <li key={nepalpackage.id} className="hover:text-darkorange py-1">
                                                <Link to={`/nepalpackage/${nepalpackage.id}`}>{nepalpackage.package_name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <Link to='' className="mr-5 hover:text-darkorange">Blogs</Link>
                    </nav>
                    <button className="inline-flex items-center text-primary bg-darkorange border border-darkorange py-1 px-3 focus:outline-none hover:bg-primary text-lg hover:text-darkorange rounded mt-4 md:mt-0">
                        Download Visa CheckList
                    </button>
                </div>
            </header>
        </>
    );
}