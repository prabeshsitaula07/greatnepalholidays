import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="text-white bg-darktheme">
            <div className="container px-5 py-10 mx-auto flex flex-wrap">
                <div className="w-full md:w-1/4 text-center md:text-left">
                    <Link to="/" className="flex items-center justify-center md:justify-start text-white">
                        <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        </div>
                        <span className="ml-3 text-xl">Tailblocks</span>
                    </Link>
                    <p className="mt-2 text-sm text-gray-400">Air plant banjo lyft occupy retro adaptogen.</p>
                </div>
                <div className="flex-grow flex flex-wrap mt-8 md:mt-0">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-full md:w-1/4 px-4">
                            <h2 className="font-medium text-gray-300 text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none">
                                {["First Link", "Second Link", "Third Link", "Fourth Link"].map((link, j) => (
                                    <li key={j}>
                                        <Link to="/" className="text-gray-400 hover:text-white">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </nav>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-gray-800">
                <div className="container mx-auto py-4 px-5 flex flex-wrap items-center justify-between">
                    <p className="text-gray-400 text-sm">© 2024 Great Nepal Holidays</p>
                    <div className="flex space-x-3">
                        <Link to="/" className="text-gray-400 hover:text-white">
                            <FaFacebookF />
                        </Link>
                        <Link to="/" className="text-gray-400 hover:text-white">
                            <FaTwitter />
                        </Link>
                        <Link to="/" className="text-gray-400 hover:text-white">
                            <FaInstagram />
                        </Link>
                        <Link to="/" className="text-gray-400 hover:text-white">
                            <FaLinkedinIn />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
