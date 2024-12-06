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

    const [activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {
        // Fetch the activities from the backend
        axios.get<Activity[]>('http://:5000/api/activities')
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
            </div>

            <div className="container px-5 pb-10 mx-auto md:px-24">
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {activities.map((activity, id) => (
                        <Link to={`/activity/${activity.id}`}>
                        <div
                            key={id}
                            className="hover:cursor-pointer transform transition shadow-md duration-700 ease-in-out hover:scale-105 hover:shadow-lg"
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
