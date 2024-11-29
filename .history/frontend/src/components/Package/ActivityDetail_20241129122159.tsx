import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// Define the type for the activity object
interface Activity {
    id: number;
    activity: string;
    place: string;
    price: number;
    country: string;
    imageurl: string;
    description: string; // HTML content
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
                <img
                    src={activity.imageurl}
                    alt={activity.activity}
                    className="w-screen max-h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <h3 className='absolute bottom-10 text-white px-5 py-10 md:px-24 flex items-center gap-2'>
                    <Link to='/activities'>Activities</Link>
                    <FontAwesomeIcon icon={faChevronRight} />
                    {activity.activity}
                </h3>
            </div>
            <div className="container mx-auto p-5 px-5 py-10 md:px-24">
                <h1 className="text-3xl font-bold mb-5 uppercase">{activity.activity}</h1>
                <div>
                <p><strong>Place:</strong> {activity.place}</p>
                <p><strong>Price:</strong> ${activity.price}</p>
                <p><strong>Country:</strong> {activity.country}</p>
                
                {/* Render description with HTML content */}
                <div 
                    className="mt-4 border shadow-md p-4"
                    dangerouslySetInnerHTML={{ __html: activity.description }} 
                />

            </div>
        </div>
    );
};

export default ActivityDetails;
