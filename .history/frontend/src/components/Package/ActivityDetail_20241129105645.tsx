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
        <div>
            <div className='relative'>
            <img src={activity.imageurl} alt={activity.activity} className='w-screen max-h-[500px] object-cover' />
            h4
            </div>
            <h1>{activity.activity}</h1>
            <p><strong>Place:</strong> {activity.place}</p>
            <p><strong>Price:</strong> {activity.price}</p>
            <p><strong>Country:</strong> {activity.country}</p>
            <p><strong>Description:</strong> {activity.description}</p>
        </div>
    );
};

export default ActivityDetails;