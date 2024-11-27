import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';

export default function Navbar() {
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

    const handleMouseLeave = () => {
        // Set a timeout to hide the dropdown after 0.5 seconds
        const newTimeoutId = setTimeout(() => {
            setIsDropdownVisible(false);
        }, 500);
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
        }, 500);
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
                    <nav className="md:ml-auto flex flex-wrap items-center justify-center text-lg">
                        <Link to='' className="mr-5 hover:text-darkorange">Home</Link>
                        <Link to='' className="mr-5 hover:text-darkorange">About Us</Link>
                        <Link to='' className="mr-5 hover:text-darkorange">Services</Link>
                        <Link to='' className="mr-5 hover:text-darkorange">Packages</Link>
                        <div
                            className="relative mr-5"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link to="#" className="hover:text-darkorange">Activities</Link>
                            {isDropdownVisible && (
                                <div
                                    className="absolute left-0 mt-2 bg-white text-black shadow-md rounded-md w-40"
                                    onMouseEnter={handleListMouseEnter}  // Keep visible while hovering over the list
                                    onMouseLeave={handleListMouseLeave}  // Hide after 0.5 seconds when mouse leaves the list
                                >
                                    <ul>
                                        <li className="hover:bg-gray-200"><Link to="/activity1" className="block px-4 py-2">Activity 1</Link></li>
                                        <li className="hover:bg-gray-200"><Link to="/activity2" className="block px-4 py-2">Activity 2</Link></li>
                                        <li className="hover:bg-gray-200"><Link to="/activity3" className="block px-4 py-2">Activity 3</Link></li>
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
