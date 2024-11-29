import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Define the type for the activity object
interface Activity {
  id: number;
  activity: string;
  place: string;
  price: number;
  country: string;
  imageurl: string;
  description: string;
}

const ActivityDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [activity, setActivity] = useState<Activity | null>(null);

  useEffect(() => {
    if (id) {
      axios
        .get<Activity>(`http://localhost:5000/api/activity/${id}`)
        .then((response) => {
          setActivity(response.data);
        })
        .catch((error) => {
          console.error("Error fetching activity details:", error);
        });
    }
  }, [id]);

  if (!activity) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={activity.imageurl}
          alt={activity.activity}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {activity.activity}
          </h1>
          <p className="text-gray-600 mb-2">
            <strong>Place:</strong> {activity.place}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Price:</strong> ${activity.price.toFixed(2)}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Country:</strong> {activity.country}
          </p>
          <p className="text-gray-600">
            <strong>Description:</strong> {activity.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetails;
