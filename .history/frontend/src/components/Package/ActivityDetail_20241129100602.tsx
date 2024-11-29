// src/components/ActivityDetails.tsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Define the type for the activity object
interface Activity {
    id: number;
    activity: string;
    place: string;
    price: number;
    country: string;
    imageurl: string;
    description: string;
}

const ActivityDetails = () => {
    // Define the type for the params to ensure type safety
    const { id } = useParams<{ id: string }>();
    const [activity, setActivity] = useState<Activity | null>(null);

    useEffect(() => {
        // Fetch activity details from the backend
        if (id) {
            axios
                .get<Activity>(`http://localhost:5000/api/activity/${id}`)
                .then(response => {
                    setActivity(response.data);
                })
                .catch(error => {
                    console.error('Error fetching activity details:', error);
                });
        }
    }, [id]);

    if (!activity) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-gray-500 text-lg">Loading...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                    src={activity.imageurl}
                    alt={activity.activity}
                    className="w-full h-64 object-cover"
                />
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">{activity.activity}</h1>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center">
                            <span className="font-semibold text-gray-600">Place:</span>
                            <p className="ml-2 text-gray-700">{activity.place}</p>
                        </div>
                        <div className="flex items-center">
                            <span className="font-semibold text-gray-600">Country:</span>
                            <p className="ml-2 text-gray-700">{activity.country}</p>
                        </div>
                    </div>
                    <p className="text-lg text-gray-900 font-semibold mb-4">
                        Price: <span className="text-green-600">${activity.price}</span>
                    </p>
                    <p className="text-gray-700 leading-relaxed">{activity.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ActivityDetails;
