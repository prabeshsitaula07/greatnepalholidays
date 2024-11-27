// src/components/ActivityDetails.tsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Define the type for the activity object
interface NepalPackage {
    id: number;
    package_name: string;
    place: string;
    price: number;
    country: string;
    imageurl: string;
    description: string;
}

const NepalPackageDetail = () => {
    // Define the type for the params to ensure type safety
    const { id } = useParams<{ id: string }>();
    const [nepalpackages, setNepalPA] = useState<NepalPackage | null>(null);

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
            <h1>{activity.activity}</h1>
            <img src={activity.imageurl} alt={activity.activity} />
            <p><strong>Place:</strong> {activity.place}</p>
            <p><strong>Price:</strong> {activity.price}</p>
            <p><strong>Country:</strong> {activity.country}</p>
            <p><strong>Description:</strong> {activity.description}</p>
        </div>
    );
};

export default NepalPackageDetail;
