import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


interface Activity {
    id: number;
    activity: string;
    place: string;
    price: number;
    country: string;
    imageurl: string;
    description: string;
}

export default function Activities() {
    const packages = [
        { imgSrc: "https://cdn.pixabay.com/photo/2015/10/06/18/26/eiffel-tower-975004_1280.jpg", category: "CATEGORY", title: "Paris", price: "$16.00" },
        { imgSrc: "https://cdn.pixabay.com/photo/2019/04/09/05/36/england-4113666_1280.jpg", category: "CATEGORY", title: "England", price: "$21.15" },
        { imgSrc: "https://cdn.pixabay.com/photo/2023/11/16/05/02/mountains-8391433_640.jpg", category: "CATEGORY", title: "Switzerland", price: "$12.00" },
    ];

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
                    {activities.map((activity) => (
                        <div
                            key={index}
                            className="hover:cursor-pointer transform transition duration-700 ease-in-out hover:scale-105 hover:shadow-lg"
                        >
                            <a className="block relative h-80 overflow-hidden">
                                <img
                                    alt={pkg.title}
                                    className="object-cover object-center w-full h-full block"
                                    src={pkg.imgSrc}
                                />
                            </a>
                            <div className="p-4 border">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                    {pkg.category}
                                </h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">
                                    {pkg.title}
                                </h2>
                                <p className="mt-1 text-darkorange">{pkg.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
