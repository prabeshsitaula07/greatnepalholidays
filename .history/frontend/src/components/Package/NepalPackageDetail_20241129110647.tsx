// src/components/ActivityDetails.tsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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
             <div className='relative'>
                <img
                    src={nepalpackage.imageurl}
                    alt={nepalpackage.package_name}
                    className="w-screen max-h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <h3 className='absolute bottom-10 text-white px-5 py-10 md:px-24 flex items-center gap-2'><Link to='/activities'>Activities</Link><FontAwesomeIcon icon={faChevronRight} />{nepalpackage.package_name}</h3>
            </div>
            <p><strong>Place:</strong> {nepalpackage.place}</p>
            <p><strong>Price:</strong> {nepalpackage.price}</p>
            <p><strong>Country:</strong> {nepalpackage.country}</p>
            <p><strong>Description:</strong> {nepalpackage.description}</p>
        </div>
    );
};

export default NepalPackageDetail;
