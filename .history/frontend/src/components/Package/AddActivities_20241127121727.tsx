// src/components/AddActivity.js
import { useState } from 'react';
import axios from 'axios';

const AddActivity = () => {
    const [activity, setActivity] = useState('');
    const [place, setPlace] = useState('');
    const [price, setPrice] = useState('');
    const [country, setCountry] = useState('');
    const [imageurl, setImageurl] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newActivity = {
            activity,
            place,
            price,
            country,
            imageurl,
            description
        };

        axios.post('http://localhost:5000/api/add-activity', newActivity)
            .then(response => {
                alert('Activity added successfully');
            })
            .catch(error => {
                console.error('There was an error adding the activity!', error);
            });
    };

    return (
        <div>
            <h1>Add Activity</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Activity Name" value={activity} onChange={e => setActivity(e.target.value)} />
                <input type="text" placeholder="Place" value={place} onChange={e => setPlace(e.target.value)} />
                <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
                <input type="text" placeholder="Country" value={country} onChange={e => setCountry(e.target.value)} />
                <input type="text" placeholder="Image URL" value={imageurl} onChange={e => setImageurl(e.target.value)} />
                <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                <button type="submit">Add Activity</button>
            </form>
        </div>
    );
};

export default AddActivity;