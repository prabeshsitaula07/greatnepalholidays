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

export default function Navbar() {
    const [activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {
        // Fetch the activities from the backend
        axios.get<Activity[]>('http://localhost:5000/api/activities')
            .then(response => {
                setActivities(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the activities!', error);
            });
    }, []);
    useEffect(() => {
        // Fetch the activities from the backend
        axios.get<Activity[]>('http://localhost:5000/api/activities')
            .then(response => {
                setActivities(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the activities!', error);
            });
    }, []);

    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [timeoutId, setTimeoutId] = useState<number | null>(null);

    // Detect scroll and update navbar background and position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);  // Fix the navbar to the top when scrolled past 50px
            } else {
                setIsScrolled(false); // Keep the navbar in normal flow when at the top
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMouseEnter = () => {
        // Clear any existing timeout to prevent multiple delays
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        setIsDropdownVisible(true); // Show dropdown immediately
    };

    const handleMouseLeave = () => {
        // Set a timeout to hide the dropdown after 0.5 seconds
        const newTimeoutId = setTimeout(() => {
            setIsDropdownVisible(false);
        }, 300);
        setTimeoutId(newTimeoutId); // Store the timeout ID
    };

    const handleListMouseEnter = () => {
        // Keep the dropdown visible when hovering over the list
        if (timeoutId) {
            clearTimeout(timeoutId); // Clear the timeout when hovering over the list
        }
    };

    const handleListMouseLeave = () => {
        // Set timeout to hide the dropdown after 0.5 seconds when mouse leaves the list
        const newTimeoutId = setTimeout(() => {
            setIsDropdownVisible(false);
        }, 100);
        setTimeoutId(newTimeoutId); // Store the timeout ID
    };


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
                        <Link to='' className="mr-5 hover:text-darkorange transition-all duration-200 ease-in-out">Home</Link>
                        <Link to='' className="mr-5 hover:text-darkorange transition-all duration-200 ease-in-out">About Us</Link>
                        <Link to='' className="mr-5 hover:text-darkorange transition-all duration-200 ease-in-out">Services</Link>
                        <Link to='' className="mr-5 hover:text-darkorange transition-all duration-200 ease-in-out">Packages</Link>
                        <div
                            className="relative mr-5"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link to="#" className="hover:text-darkorange transition-all duration-200 ease-in-out">Activities <FaCaretDown className="inline text-xl font-light" /></Link>
                            {isDropdownVisible && (
                                <div
                                    className="absolute left-0 top-full bg-primary text-black shadow-md p-4 z-30 mt-8 whitespace-nowrap w-fit transition-all duration-200 ease-in-out"
                                    onMouseEnter={handleListMouseEnter}  // Keep visible while hovering over the list
                                    onMouseLeave={handleListMouseLeave}  // Hide after 0.5 seconds when mouse leaves the list
                                >
                                    <ul>
                                        {activities.map((activity, id) => (
                                            <li key={id} className="hover:text-darkorange py-1 transition-all duration-200 ease-in-out">
                                                <Link to={`/activity/${activity.id}`}>{activity.activity}</Link>
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
