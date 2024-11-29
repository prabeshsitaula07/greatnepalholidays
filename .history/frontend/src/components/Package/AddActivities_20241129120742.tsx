// src/components/AddActivity.tsx
import { useState } from 'react';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
  ClassicEditor,
  Bold,
  Essentials,
  Heading,
  Indent,
  IndentBlock,
  Italic,
  Link,
  List,
  MediaEmbed,
  Paragraph,
  Table,
  Undo
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';

// Define the type for the activity object
interface Activity {
    activity: string;
    place: string;
    price: number;
    country: string;
    imageurl: string;
    description: string;
}

const AddActivity = () => {
    const [activity, setActivity] = useState<string>('');
    const [place, setPlace] = useState<string>('');
    const [price, setPrice] = useState<string>(''); // Initially a string for input handling
    const [country, setCountry] = useState<string>('');
    const [imageurl, setImageurl] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newActivity: Activity = {
            activity,
            place,
            price: parseFloat(price), // Ensure price is a number
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
                <input
                    type="text"
                    placeholder="Activity Name"
                    value={activity}
                    onChange={e => setActivity(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Place"
                    value={place}
                    onChange={e => setPlace(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Country"
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={imageurl}
                    onChange={e => setImageurl(e.target.value)}
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                ></textarea>
                <div className="border-2 border-gray-300 px-5 py-10 md:px-24 rounded-lg shadow-md">
      <CKEditor
      
        editor={ ClassicEditor }
        config={ {
          toolbar: [
            'undo', 'redo', '|',
            'heading', '|', 'bold', 'italic', '|',
            'link', 'insertTable', 'mediaEmbed', '|',
            'bulletedList', 'numberedList', 'indent', 'outdent'
          ],
          plugins: [
            Bold,
            Essentials,
            Heading,
            Indent,
            IndentBlock,
            Italic,
            Link,
            List,
            MediaEmbed,
            Paragraph,
            Table,
            Undo
          ],
          initialData: '',
        } }
      />
    </div>
                <button type="submit">Add Activity</button>
            </form>
        </div>
    );
};

export default AddActivity;
