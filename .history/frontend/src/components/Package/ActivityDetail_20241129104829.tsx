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
            axios.get<Activity>(`http://localhost:5000/api/activity/${id}`)
                .then(response => {
                    setActivity(response.data);
                })
                .catch(error => {
                    console.error('Error fetching activity details:', error);
                });
        }
    }, [id]);

    if (!activity) {
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-screen-lg mx-auto p-4">
        <div className="overflow-hidden">
            <img 
                src={activity.imageurl} 
                alt={activity.activity} 
                className="w-full h-[500px] object-cover" 
            />
        </div>
        <div className="mt-6 text-center space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">{activity.activity}</h1>
            <p className="text-lg">
                <strong>Place:</strong> {activity.place}
            </p>
            <p className="text-lg">
                <strong>Price:</strong> {activity.price}
            </p>
            <p className="text-lg">
                <strong>Country:</strong> {activity.country}
            </p>
            <p className="text-lg">
                <strong>Description:</strong> {activity.description}
            </p>
        </div>
    </div>
    
    );
};

export default ActivityDetails;
