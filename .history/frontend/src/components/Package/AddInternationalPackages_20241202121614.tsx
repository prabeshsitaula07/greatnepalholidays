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
interface InternationalPackage {
    internationalpackage: string;
    place: string;
    price: number;
    country: string;
    imageurl: string;
    description: string;
    duration: string;
}

const AddInternationalPackages = () => {
    const [activity, setActivity] = useState<string>('');
    const [place, setPlace] = useState<string>('');
    const [price, setPrice] = useState<string>(''); // Initially a string for input handling
    const [country, setCountry] = useState<string>('');
    const [imageurl, setImageurl] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [duration, setDuration] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newActivity: Activity = {
            activity,
            place,
            price: parseFloat(price), // Ensure price is a number
            country,
            imageurl,
            description,
            duration
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
            <h1 className="text-4xl tracking-tight text-center pt-10 font-extrabold text-gray-900 dark:text-black">
                Add Activity
            </h1>
            <form onSubmit={handleSubmit} className="px-5 py-10 md:px-24">
                <input
                    type="text"
                    placeholder="Activity Name"
                    value={activity}
                    onChange={e => setActivity(e.target.value)}
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-darkorange"
                />
                <input
                    type="text"
                    placeholder="Place"
                    value={place}
                    onChange={e => setPlace(e.target.value)}
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-darkorange"
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-darkorange"
                />
                <input
                    type="text"
                    placeholder="Country"
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-darkorange"
                />
                <input
                    type="text"
                    placeholder="Duration"
                    value={duration}
                    onChange={e => setDuration(e.target.value)}
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-darkorange"
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={imageurl}
                    onChange={e => setImageurl(e.target.value)}
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-darkorange"
                />
                <div className="border border-gray-300 rounded-lg shadow-md mb-4">
                    <CKEditor
                        editor={ClassicEditor}
                        config={{
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
                            initialData: description, // Set the initial content of CKEditor
                        }}
                        onChange={(event, editor) => {
                            setDescription(editor.getData()); // Update the description state when CKEditor content changes
                        }}
                    />
                </div>
                <button className="inline-flex items-center text-primary bg-darkorange border border-darkorange py-1 px-3 focus:outline-none hover:bg-primary text-lg hover:text-darkorange rounded mt-4 md:mt-0" type='submit'>
                    Add Activity
                </button>
            </form>
        </div>
    );
};

export default AddInternationalPackages;
