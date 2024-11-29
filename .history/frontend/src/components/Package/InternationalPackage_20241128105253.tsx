// import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


interface InternationalPackage {
    id: number;
    package_name: string;
    place: string;
    price: number;
    country: string;
    image_url: string;
    description: string;
}

export default function InternationalPackage() {

    const [internationalpackages, setInternationalPackages] = useState<InternationalPackage[]>([]);

    useEffect(() => {
        // Fetch the activities from the backend
        axios.get<InternationalPackage[]>('http://localhost:5000/api/internationalpackages')
            .then(response => {
                setInternationalPackages(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the activities!', error);
            });
    }, []);


    return (
        <section className="text-gray-600 body-font">
            <div className="flex justify-between items-center px-5 py-10 md:px-24">
                <div>
                    <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black">
                        Popular International Packages
                    </h2>
                    <h4 className="text-lg text-orange-400 font-semibold mt-2">
                        Popular Things to do in Nepal.
                    </h4>
                </div>
                {/* <Link to='/nepalpackages'>
                <button className="inline-flex items-center text-primary bg-darkorange border px-4 py-0 border-darkorange focus:outline-none hover:bg-primary text-lg hover:text-darkorange rounded-3xl h-10 md:mt-0 transition duration-300">
                    See All Packages
                    <FaArrowRight className="ml-2 text-lg" />
                </button>
                </Link> */}
            </div>

            <div className="container px-5 pb-10 mx-auto md:px-24">
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {internationalpackages.map((internationalpackage, id) => (
                        <Link to={`/internationalpackage/${internationalpackage.id}`}>
                        <div
                            key={id}
                            className="hover:cursor-pointer transform shadow-md transition duration-700 ease-in-out hover:scale-105 hover:shadow-lg"
                        >
                            <a className="block relative h-80 overflow-hidden">
                                <img
                                    alt={internationalpackage.place}
                                    className="object-cover object-center w-full h-full block"
                                    src={internationalpackage.image_url}
                                />
                            </a>
                            <div className="p-4 border">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                    {internationalpackage.country}
                                </h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">
                                    {nepalpackage.package_name}
                                </h2>
                                <p className="mt-1 text-darkorange">$ {nepalpackage.price}</p>
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
