// src/components/ActivityDetails.tsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Define the type for the activity object
interface InternationalPackage {
    id: number;
    package_name: string;
    place: string;
    price: number;
    country: string;
    image_url: string;
    description: string;
}

const InternationalPackageDetail = () => {
    // Define the type for the params to ensure type safety
    const { id } = useParams<{ id: string }>();
    const [nepalpackage, setInternationalPackage] = useState<InternationalPackage | null>(null);

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
            <h1>{nepalpackage.package_name}</h1>
            <img src={nepalpackage.imageurl} alt={nepalpackage.package_name} />
            <p><strong>Place:</strong> {nepalpackage.place}</p>
            <p><strong>Price:</strong> {nepalpackage.price}</p>
            <p><strong>Country:</strong> {nepalpackage.country}</p>
            <p><strong>Description:</strong> {nepalpackage.description}</p>
        </div>
    );
};

export default InternationalPackageDetail;
