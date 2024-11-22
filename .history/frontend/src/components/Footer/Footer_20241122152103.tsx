import { Link } from "react-router-dom";

export default function Footer() {
    const categories = ["First Link", "Second Link", "Third Link", "Fourth Link"];
    const socialIcons = [
        { path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z", href: "" },
        { path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z", href: "" },
        { path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01", href: "" },
        { path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z", href: "" },
    ];

    return (
        <footer className="text-white bg-darktheme body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="w-64 flex-shrink-0 text-center md:text-left">
                    <Link to="" className="flex items-center justify-center md:justify-start text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        <span className="ml-3 text-xl">Tailblocks</span>
                    </Link>
                    <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
                </div>
                <div className="flex-grow flex flex-wrap -mb-10">
                    {Array(4).fill().map((_, idx) => (
                        <div key={idx} className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                {categories.map((item, index) => (
                                    <li key={index}>
                                        <Link to="" className="text-gray-600 hover:text-gray-800">{item}</Link>
                                    </li>
                                ))}
                            </nav>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-gray-100">
                <div className="container mx-auto py-4 px-5 flex flex-wrap items-center">
                    <p className="text-gray-500 text-sm text-center sm:text-left">
                        © 2024 Great Nepal Holidays —
                        <Link to="https://twitter.com/knyttneve" className="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@knyttneve</Link>
                    </p>
                    <span className="inline-flex sm:ml-auto mt-2 justify-center sm:justify-start">
                        {socialIcons.map((icon, index) => (
                            <Link key={index} to={icon.href} className="text-gray-500 ml-3">
                                <svg className="w-5 h-5" fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d={icon.path} />
                                </svg>
                            </Link>
                        ))}
                    </span>
                </div>
            </div>
        </footer>
    );
}
