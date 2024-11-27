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
    const [nepalpackage, setNepalPackage] = useState<NepalPackage | null>(null);

    useEffect(() => {
        // Fetch activity details from the backend
        if (id) {
            axios.get<NepalPackage>(`http://localhost:5000/api/nepalpackage/${id}`)
                .then(response => {
                    setNepalPackage(response.data);
                })
                .catch(error => {
                    console.error('Error fetching activity details:', error);
                });
        }
    }, [id]);

    if (!nepalpackage) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{nepalpackage.activity}</h1>
            <img src={activity.imageurl} alt={activity.activity} />
            <p><strong>Place:</strong> {activity.place}</p>
            <p><strong>Price:</strong> {activity.price}</p>
            <p><strong>Country:</strong> {activity.country}</p>
            <p><strong>Description:</strong> {activity.description}</p>
        </div>
    );
};

export default NepalPackageDetail;
