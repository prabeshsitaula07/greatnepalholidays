import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';
import footerbg from '../../assets/footerbg.png';

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

export default function Footer() {
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
        axios.get<InternationalPackage[]>('http://localhost:5000/api/internationalpackages')
            .then(response => setInternationalPackages(response.data))
            .catch(error => console.error('There was an error fetching the Nepal packages!', error));
    }, []);

    return (
        <footer
            className="text-white body-font bg-cover bg-center"
            style={{
                backgroundImage: `url(${footerbg})`,
            }}
        >
            <div className="container px-5 py-24 md:px-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex gap-4 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
                    <Link to='/'>
                        <img src={logo1} alt="" className="h-24" />
                    </Link>
                    <Link to='/'>
                        <img src={logo2} alt="" className="h-24" />
                    </Link>
                </div>
                <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Quick Links</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link to='/' className="text-white hover:text-gray-800">Home</Link>
                            </li>
                            <li>
                                <Link to='/services' className="text-white hover:text-gray-800">Services</Link>
                            </li>
                            <li>
                                <Link to='/contact' className="text-white hover:text-gray-800">Contact</Link>
                            </li>
                            <li>
                                <Link to='/about/gallery' className="text-white hover:text-gray-800">Gallery</Link>
                            </li>
                            <li>
                                <Link to='/about/team' className="text-white hover:text-gray-800">Team Members</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3"><Link to='/activities'>ACTIVITIES</Link></h2>
                        <nav className="list-none mb-10">
                        {activities.map((activity) => (
                                            <li key={activity.id} className="text-white hover:text-gray-800">
                                                <Link to={`/activity/${activity.id}`}>{activity.activity}</Link>
                                            </li>
                                        ))}
                        </nav>
                    </div>
                    
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3"><Link to='/internationalpackages'>International Packages</Link></h2>
                        <nav className="list-none mb-10">
                        {internationalpackages.map((internationalpackage) => (
                                            <li key={internationalpackage.id} className="text-white hover:text-gray-800">
                                                <Link to={`/international/${internationalpackage.id}`}>{internationalpackage.package_name}</Link>
                                            </li>
                                        ))}
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3"><Link to='/nepalpackages'>Nepal Packages</Link></h2>
                        <nav className="list-none mb-10">
                        {nepalpackages.map((nepalpackage) => (
                                            <li key={nepalpackage.id} className="text-white hover:text-gray-800">
                                                <Link to={`/nepalpackages/${internationalpackage.id}`}>{internationalpackage.package_name}</Link>
                                            </li>
                                        ))}
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100">
                <div className="container mx-auto py-4 px-5 md:px-24 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left">© 2024 Great Nepal Holidays —
                        <Link to='https://twitter.com/knyttneve' rel="noopener noreferrer" className="text-gray-500 ml-1" target="_blank">@knyttneve</Link>
                    </p>
                    <span className="text-gray-500 mx-auto md:px-24">
                        Website made by <a href="https://prabeshsitaula.com.np/" target="_blank">Prabesh Sitaula</a>
                    </span>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <Link to='' className="text-gray-500">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </Link>
                        <Link to='' className="ml-3 text-gray-500">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </Link>
                        <Link to='' className="ml-3 text-gray-500">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </Link>
                        <Link to='' className="ml-3 text-gray-500">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </Link>
                    </span>
                </div>
            </div>
        </footer>
    )
}