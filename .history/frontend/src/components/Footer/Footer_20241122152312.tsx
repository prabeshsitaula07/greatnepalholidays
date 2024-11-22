import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const links = [
    "First Link", "Second Link", "Third Link", "Fourth Link"
  ];

  return (
    <footer className="text-white bg-darktheme body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col md:flex-row">
        <div className="w-64 text-center md:text-left mt-10 md:mt-0">
          <Link to="" className="flex title-font font-medium items-center justify-center md:justify-start text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tailblocks</span>
          </Link>
          <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
        </div>

        <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center">
          {Array(4).fill().map((_, index) => (
            <div className="lg:w-1/4 md:w-1/2 w-full px-4" key={index}>
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <Link to="" className="text-gray-600 hover:text-gray-800">{link}</Link>
                  </li>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2024 Great Nepal Holidays —
            <Link to="https://twitter.com/knyttneve" className="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@knyttneve</Link>
          </p>
          <div className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <Link to="" className="text-gray-500">
              <FaFacebook className="w-5 h-5" />
            </Link>
            <Link to="" className="ml-3 text-gray-500">
              <FaTwitter className="w-5 h-5" />
            </Link>
            <Link to="" className="ml-3 text-gray-500">
              <FaInstagram className="w-5 h-5" />
            </Link>
            <Link to="" className="ml-3 text-gray-500">
              <FaLinkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
