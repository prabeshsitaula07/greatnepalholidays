import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


interface NepalPackage {
    id: number;
    activity: string;
    place: string;
    price: number;
    country: string;
    imageurl: string;
    description: string;
}

export default function NepalPackages() {

    const [nepalpackages, setNepalPackages] = useState<NepalPackage[]>([]);

    useEffect(() => {
        // Fetch the activities from the backend
        axios.get<NepalPackage[]>('http://localhost:5000/api/nepalpackages')
            .then(response => {
                setNepalPackages(response.data);
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
                        Nepal Best Seller Trips
                    </h2>
                    <h4 className="text-lg text-orange-400 font-semibold mt-2">
                        Popular Things to do in Nepal.
                    </h4>
                </div>
                <Link to='/activities'>
                <button className="inline-flex items-center text-primary bg-darkorange border px-4 py-0 border-darkorange focus:outline-none hover:bg-primary text-lg hover:text-darkorange rounded-3xl h-10 md:mt-0 transition duration-300">
                    See All Packages
                    <FaArrowRight className="ml-2 text-lg" />
                </button>
                </Link>
            </div>

            <div className="container px-5 pb-10 mx-auto md:px-24">
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {nepalpackages.map((package, id) => (
                        <Link to={`/activity/${package.id}`}>
                        <div
                            key={id}
                            className="hover:cursor-pointer transform transition duration-700 ease-in-out hover:scale-105 hover:shadow-lg"
                        >
                            <a className="block relative h-80 overflow-hidden">
                                <img
                                    alt={activity.place}
                                    className="object-cover object-center w-full h-full block"
                                    src={activity.imageurl}
                                />
                            </a>
                            <div className="p-4 border">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                    {activity.country}
                                </h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">
                                    {activity.activity}
                                </h2>
                                <p className="mt-1 text-darkorange">$ {activity.price}</p>
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}