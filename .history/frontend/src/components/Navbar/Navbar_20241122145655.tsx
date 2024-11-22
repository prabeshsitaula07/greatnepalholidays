import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    // Detect scroll and update navbar background
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`text-black body-font fixed w-full z-20 transition-all duration-300 ${isScrolled ? 'bg-primary' : 'bg-transparent'}`}
        >
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to='' className="flex title-font font-medium items-center mb-4 md:mb-0">
                    {/* logo */}
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link to='' className="mr-5 hover:text-orange">First Link</Link>
                    <Link to='' className="mr-5 hover:text-orange">Second Link</Link>
                    <Link to='' className="mr-5 hover:text-orange">Third Link</Link>
                    <Link to='' className="mr-5 hover:text-orange">Fourth Link</Link>
                </nav>
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                    Button
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
}
