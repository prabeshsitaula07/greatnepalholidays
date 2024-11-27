import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Activity = {
  id: number;
  activity: string;
  place: string;
  price: number;
  country: string;
  imageurl: string;
  description: string;
};

const Aaa: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [form, setForm] = useState<Omit<Activity, 'id'>>({
    activity: '',
    place: '',
    price: 0,
    country: '',
    imageurl: '',
    description: '',
  });

  const fetchActivities = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/activities');
      setActivities(response.data);
    } catch (err) {
      toast.error('Error fetching activities');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/activities', form);
      toast.success('Activity added successfully');
      fetchActivities();
    } catch (err) {
      toast.error('Error adding activity');
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:5000/api/activities/${id}`);
      toast.success('Activity deleted successfully');
      fetchActivities();
    } catch (err) {
      toast.error('Error deleting activity');
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Activity Management</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Activity"
            value={form.activity}
            onChange={(e) => setForm({ ...form, activity: e.target.value })}
            className="border p-2"
            required
          />
          <input
            type="text"
            placeholder="Place"
            value={form.place}
            onChange={(e) => setForm({ ...form, place: e.target.value })}
            className="border p-2"
            required
          />
          <input
            type="number"
            placeholder="Price"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: +e.target.value })}
            className="border p-2"
            required
          />
          <input
            type="text"
            placeholder="Country"
            value={form.country}
            onChange={(e) => setForm({ ...form, country: e.target.value })}
            className="border p-2"
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={form.imageurl}
            onChange={(e) => setForm({ ...form, imageurl: e.target.value })}
            className="border p-2"
            required
          />
          <textarea
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="border p-2"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 mt-4">
          Add Activity
        </button>
      </form>
      <div>
        {activities.map((activity) => (
          <div key={activity.id} className="border p-4 mb-2">
            <h2 className="text-lg font-bold">{activity.activity}</h2>
            <p>{activity.description}</p>
            <button
              onClick={() => handleDelete(activity.id)}
              className="bg-red-500 text-white p-2 mt-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Aa;
