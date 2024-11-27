// src/components/ActivityDetails.js
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ActivityDetails = () => {
    const { id } = useParams();
    const [activity, setActivity] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/activity/${id}`)
            .then(response => {
                setActivity(response.data);
            })
            .catch(error => {
                console.error('Error fetching activity details:', error);
            });
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

export default ActivityDetails;