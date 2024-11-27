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

const NepalPackageDetails = () => {
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

    if (!package_name) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{package_name.packageName}</h1>
            <img src={package_name.imageurl} alt={package_name.packageName} />
            <p><strong>Place:</strong> {package_name.place}</p>
            <p><strong>Price:</strong> {package_name.price}</p>
            <p><strong>Country:</strong> {package_name.country}</p>
            <p><strong>Description:</strong> {package_name.description}</p>
        </div>
    );
};

export default NepalPackageDetails;
