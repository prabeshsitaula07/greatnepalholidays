import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define Activity interface
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
                View/Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      <ToastContainer />
    </div>
  );
};

// View/Edit Activity Page
const ActivityPage = () => {
  const [activity, setActivity] = useState<Activity | null>(null);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [formData, setFormData] = useState<Activity>({
    id: 0,
    activity: '',
    place: '',
    price: '',
    country: '',
    imageurl: '',
    description: ''
  });
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
      setFormData(response.data);
    } catch (error) {
      console.error('Error fetching activity details', error);
    }
  };

  // Handle form changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission to update activity
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/activities/${formData.id}`, formData);
      toast.success('Activity updated successfully');
      fetchActivity(formData.id); // Refresh the activity details
      setIsEditMode(false); // Exit edit mode after submit
    } catch (error) {
      toast.error('Error updating activity');
    }
  };

  // Handle delete
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/activities/${formData.id}`);
      toast.success('Activity deleted successfully');
      navigate('/'); // Navigate back to the home page
    } catch (error) {
      toast.error('Error deleting activity');
    }
  };

  if (!activity) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{isEditMode ? 'Edit' : 'View'} Activity</h1>

      {/* Form to View/Edit Activity */}
      <form onSubmit={handleFormSubmit} className="mb-4 p-4 border rounded-lg shadow-md">
        <input
          type="text"
          name="activity"
          value={formData.activity}
          onChange={handleInputChange}
          className="p-2 mb-2 border rounded w-full"
          disabled={!isEditMode}
        />
        <input
          type="text"
          name="place"
          value={formData.place}
          onChange={handleInputChange}
          className="p-2 mb-2 border rounded w-full"
          disabled={!isEditMode}
        />
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          className="p-2 mb-2 border rounded w-full"
          disabled={!isEditMode}
        />
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          className="p-2 mb-2 border rounded w-full"
          disabled={!isEditMode}
        />
        <input
          type="text"
          name="imageurl"
          value={formData.imageurl}
          onChange={handleInputChange}
          className="p-2 mb-2 border rounded w-full"
          disabled={!isEditMode}
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          className="p-2 mb-2 border rounded w-full"
          disabled={!isEditMode}
        />
        {isEditMode ? (
          <>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Update Activity</button>
            <button
              type="button"
              onClick={handleDelete}
              className="bg-red-500 text-white p-2 rounded ml-2"
            >
              Delete Activity
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={() => setIsEditMode(true)}
            className="bg-yellow-500 text-white p-2 rounded"
          >
            Edit
          </button>
        )}
      </form>

      {/* Activity Details */}
      <div className="mt-8">
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

      <ToastContainer />
    </div>
  );
};

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/activity/:id" element={<ActivityPage />} />
      </Routes>
    </Router>
  );
};
