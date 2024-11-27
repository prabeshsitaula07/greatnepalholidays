// src/components/ActivitiesList.tsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Define the type for an activity
interface Activity {
    id: number;
    activity: string;
    place: string;
    price: number;
    country: string;
    imageurl: string;
    description: string;
}

const ActivitiesList = () => {
    // Use type annotation for the activities state
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
        <div>
            <h1>All Activities</h1>
            <div className="activities">
                {activities.map((activity) => (
                    <div key={activity.id} className="activity">
                        <h2>{activity.activity}</h2>
                        <p>{activity.place}</p>
                        <p>{activity.price}</p>
                        <Link to={`/activity/${activity.id}`}>View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActivitiesList;
