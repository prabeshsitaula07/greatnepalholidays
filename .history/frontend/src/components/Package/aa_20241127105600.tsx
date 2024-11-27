// src/App.tsx

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
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

const App = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchActivities();
  }, []);

  // Fetch all activities
  const fetchActivities = async () => {
    try {
      const response = await axios.get<Activity[]>('http://localhost:5000/api/activities');
      setActivities(response.data);
    } catch (error) {
      console.error('Error fetching activities', error);
    }
  };

  // Navigate to activity details page
  const handleView = (id: number) => {
    navigate(`/activity/${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Activities Management</h1>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="border p-4 mb-2 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold">{activity.activity}</h2>
              <p>{activity.description}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleView(activity.id)}
                className="bg-green-500 text-white p-2 rounded"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
