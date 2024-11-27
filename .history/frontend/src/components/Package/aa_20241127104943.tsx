import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const [formData, setFormData] = useState<Activity>({
    id: 0,
    activity: '',
    place: '',
    price: '',
    country: '',
    imageurl: '',
    description: ''
  });
  const [isEditMode, setIsEditMode] = useState<boolean>(false); // To toggle between view and edit mode
  const [viewActivity, setViewActivity] = useState<Activity | null>(null); // To store activity being viewed

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

  // Handle form changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission to create or update an activity
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (formData.id === 0) {
        await axios.post('http://localhost:5000/api/activities', formData);
        toast.success('Activity created successfully');
      } else {
        await axios.put(`http://localhost:5000/api/activities/${formData.id}`, formData);
        toast.success('Activity updated successfully');
      }
      fetchActivities();
      resetForm();
      setIsEditMode(false); // Exit edit mode after submit
    } catch (error) {
      toast.error('Error saving activity');
    }
  };

  // Handle delete
  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:5000/api/activities/${id}`);
      toast.success('Activity deleted successfully');
      fetchActivities();
    } catch (error) {
      toast.error('Error deleting activity');
    }
  };

  // View activity details
  const handleView = (activity: Activity) => {
    setViewActivity(activity);
    setIsEditMode(false); // Set to view mode
  };

  // Edit activity
  const handleEdit = (activity: Activity) => {
    setFormData(activity);
    setIsEditMode(true); // Set to edit mode
    setViewActivity(null); // Clear view mode data
  };

  // Reset form data
  const resetForm = () => {
    setFormData({
      id: 0,
      activity: '',
      place: '',
      price: '',
      country: '',
      imageurl: '',
      description: ''
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Activities Management</h1>

      {/* Form to Add/Update activity */}
      <form onSubmit={handleFormSubmit} className="mb-4 p-4 border rounded-lg shadow-md">
        <input
          type="text"
          name="activity"
          placeholder="Activity Name"
          value={formData.activity}
          onChange={handleInputChange}
          className="p-2 mb-2 border rounded w-full"
          disabled={!isEditMode}
        />
        <input
          type="text"
          name="place"
          placeholder="Place"
          value={formData.place}
          onChange={handleInputChange}
          className="p-2 mb-2 border rounded w-full"
          disabled={!isEditMode}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleInputChange}
          className="p-2 mb-2 border rounded w-full"
          disabled={!isEditMode}
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleInputChange}
          className="p-2 mb-2 border rounded w-full"
          disabled={!isEditMode}
        />
        <input
          type="text"
          name="imageurl"
          placeholder="Image URL"
          value={formData.imageurl}
          onChange={handleInputChange}
          className="p-2 mb-2 border rounded w-full"
          disabled={!isEditMode}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleInputChange}
          className="p-2 mb-2 border rounded w-full"
          disabled={!isEditMode}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
        >
          {formData.id === 0 ? 'Add Activity' : 'Update Activity'}
        </button>
      </form>

      {/* Activity List */}
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="border p-4 mb-2 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold">{activity.activity}</h2>
              <p>{activity.description}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleView(activity)}
                className="bg-green-500 text-white p-2 rounded"
              >
                View
              </button>
              <button
                onClick={() => handleEdit(activity)}
                className="bg-yellow-500 text-white p-2 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(activity.id)}
                className="bg-red-500 text-white p-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View Mode */}
      {viewActivity && (
        <div className="mt-8 p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-bold">{viewActivity.activity}</h2>
          <p><strong>Place:</strong> {viewActivity.place}</p>
          <p><strong>Price:</strong> {viewActivity.price}</p>
          <p><strong>Country:</strong> {viewActivity.country}</p>
          <p><strong>Description:</strong> {viewActivity.description}</p>
          <p><strong>Image URL:</strong> {viewActivity.imageurl}</p>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default Aa;
