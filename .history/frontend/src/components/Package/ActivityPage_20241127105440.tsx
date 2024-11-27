// src/ActivityPage.tsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Activity {
  id: number;
  activity: string;
  place: string;
  price: string;
  country: string;
  imageurl: string;
  description: string;
}

const ActivityPage = () => {
  const [activity, setActivity] = useState<Activity | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      fetchActivity(Number(id));
    }
  }, [id]);

  // Fetch a single activity by id
  const fetchActivity = async (id: number) => {
    try {
      const response = await axios.get<Activity>(`http://localhost:5000/api/activities/${id}`);
      setActivity(response.data);
    } catch (error) {
      console.error('Error fetching activity details', error);
    }
  };

  if (!activity) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Activity Details</h1>

      {/* Display Activity Details */}
      <div className="mb-4 p-4 border rounded-lg shadow-md">
        <h3 className="font-bold">Activity:</h3>
        <p>{activity.activity}</p>
        <h3 className="font-bold">Place:</h3>
        <p>{activity.place}</p>
        <h3 className="font-bold">Price:</h3>
        <p>{activity.price}</p>
        <h3 className="font-bold">Country:</h3>
        <p>{activity.country}</p>
        <h3 className="font-bold">Description:</h3>
        <p>{activity.description}</p>
        <h3 className="font-bold">Image URL:</h3>
        <p>{activity.imageurl}</p>
      </div>
    </div>
  );
};

export default ActivityPage;