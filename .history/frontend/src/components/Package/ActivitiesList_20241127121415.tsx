// src/components/ActivitiesList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ActivitiesList = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/activities')
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
                {activities.map(activity => (
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