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
    const [internationalpackage, setInternationalPackage] = useState<InternationalPackage | null>(null);

    useEffect(() => {
        // Fetch activity details from the backend
        if (id) {
            axios.get<InternationalPackage>(`http://localhost:5000/api/internationalpackage/${id}`)
                .then(response => {
                    setInternationalPackage(response.data);
                })
                .catch(error => {
                    console.error('Error fetching activity details:', error);
                });
        }
    }, [id]);

    if (!internationalpackage) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{internationalpackage.package_name}</h1>
            <img src={internationalpackage.image_url} alt={internationalpackage.package_name} />
            <p><strong>Place:</strong> {internationalpackage.place}</p>
            <p><strong>Price:</strong> {nepalpackage.price}</p>
            <p><strong>Country:</strong> {nepalpackage.country}</p>
            <p><strong>Description:</strong> {nepalpackage.description}</p>
        </div>
    );
};

export default InternationalPackageDetail;