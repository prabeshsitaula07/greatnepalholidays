import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

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

    return (
        <>
        <div className='w-full bg-darktheme flex gap-10 px-10 py-2'>
            <span className='text-white'>0988848484</span>
            <span className='text-white'>0988848484</span>
        </div>

        <header
            className={`text-black body-font w-full z-20 transition-all duration-300 ${isScrolled ? 'fixed top-0 bg-navbarbg' : 'bg-transparent'} `}
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
                <button className="inline-flex items-center text-primary bg-darkorange border border-darkorange py-1 px-3 focus:outline-none hover:bg-primary hover:text-darkorange rounded text-base mt-4 md:mt-0">
                    Download Visa CheckList
                </button>
            </div>
        </header>
        </>
    );
}