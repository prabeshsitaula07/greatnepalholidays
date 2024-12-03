import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaDollarSign, FaFlag, FaClock } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

// Define the type for the activity object
interface Activity {
    id: number;
    activity: string;
    place: string;
    price: number;
    country: string;
    imageurl: string;
    description: string; // HTML content
    duration: string;
}

const ActivityDetails = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pnumber, setPnumber] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const serviceId = 'service_qk2morn';
        const templateId = 'template_0t1jiz7';
        const publicKey = 'mEWCEwNqIHDwNp7oz';

        const templateParams = {
            from_name: name,
            from_email: email,
            from_pnumber: pnumber,
            to_name: 'Great Nepal Holidays',
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email Sent Successfully!', response);
                setName('');
                setEmail('');
                setPnumber('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error sending email: ', error);
            });
    };

    // Define the type for the params to ensure type safety
    const { id } = useParams<{ id: string }>();
    const [activity, setActivity] = useState<Activity | null>(null);

    useEffect(() => {
        // Fetch activity details from the backend
        if (id) {
            axios.get<Activity>(`http://localhost:5000/api/activity/${id}`)
                .then(response => {
                    setActivity(response.data);
                })
                .catch(error => {
                    console.error('Error fetching activity details:', error);
                });
        }
    }, [id]);

    if (!activity) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className='relative'>
                <img
                    src={activity.imageurl}
                    alt={activity.activity}
                    className="w-screen max-h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className='absolute bottom-10 text-white px-5 md:px-24'>
                <h1 className='text-xl md:text-5xl font-extrabold'>{activity.activity}</h1>
                <div className='flex items-center gap-2 pt-2 pb-10 whitespace-nowrap'>
                    <Link to='/activities' className='hover:text-darkorange duration-300 transition'>Activities</Link>
                    <FontAwesomeIcon icon={faChevronRight} />
                    {activity.activity}
                    </div>
                </div>
            </div>
            <div className="container mx-auto p-5 px-5 py-10 lg:px-24">
                <h1 className="text-3xl font-bold text-center mb-5 uppercase font-parkinsans">{activity.activity}</h1>
                <div className='bg-primary text-black p-4 rounded-lg shadow-sm'>
                    <h2 className='font-semibold text-xl mb-4 font-fira'>Trip Information</h2>

                    <div className='gird grid-cols-2 space-y-4'>
                        <div className='flex items-center space-x-3'>
                            <FaMapMarkerAlt className='text-3xl text-darkorange' />
                            <div>
                                <h4 className='text-sm'>Place</h4>
                                <p className='text-lg font-medium'>{activity.place}</p>
                            </div>
                        </div>

                        <div className='flex items-center space-x-3'>
                            <FaDollarSign className='text-3xl text-darkorange' />
                            <div>
                                <h4 className='text-sm'>Price</h4>
                                <p className='text-lg font-medium'>${activity.price}</p>
                            </div>
                        </div>

                        <div className='flex items-center space-x-3'>
                            <FaFlag className='text-3xl text-darkorange' />
                            <div>
                                <h4 className='text-sm'>Country</h4>
                                <p className='text-lg font-medium'>{activity.country}</p>
                            </div>
                        </div>

                        <div className='flex items-center space-x-3'>
                            <FaClock className='text-3xl text-darkorange' />
                            <div>
                                <h4 className='text-md'>Duration</h4>
                                <p className='text-lg font-medium'>{activity.duration}</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='md:flex gap-2'>
                    {/* Render description with HTML content */}
                    <div
                        className="mt-4 border p-4 w-full md:w-1/2 lg:w-[80%]"
                        dangerouslySetInnerHTML={{ __html: activity.description }}
                    />

                    <div className='md:w-1/2 lg:w-[20%] w-full pt-4'>

                        <div className='bg-primary p-4'>
                            <h3 className='font-bold text-xl font-fira'>We love to hear from you!</h3><br />
                            Send us your question, feedback and support here: <br /><br />
                            <FontAwesomeIcon icon={faEnvelope} className='font-bold' /> info@greatnepalholidays.com
                        </div>

                        <form className="bg-white flex flex-col md:ml-auto pt-4 mt-8 md:mt-0" onSubmit={handleSubmit}>
                            <h2 className="text-white bg-darkorange px-4 py-2 text-lg mb-1 font-medium title-font">Quick Inquiry</h2>
                            <div className="relative mb-4">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-darkorange focus:ring-2 focus:ring-darkorange text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={name}
                                    placeholder='Your Name: '
                                    onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-darkorange focus:ring-2 focus:ring-darkorange text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={email}
                                    placeholder='Your Email: '
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="pnumber" className="leading-7 text-sm text-gray-600">Number</label>
                                <input type="number" id="pnumber" name="pnumber" className="w-full bg-white rounded border border-gray-300 focus:border-darkorange focus:ring-2 focus:ring-darkorange text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={pnumber}
                                    placeholder='Your Number: '
                                    onChange={(e) => setPnumber(e.target.value)} />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-darkorange focus:ring-2 focus:ring-darkorange h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" value={message}
                                    placeholder='Your Inquiry: '
                                    onChange={(e) => setMessage(e.target.value)} ></textarea>
                            </div>
                            <button className="bg-darkorange border border-darkorange text-primary py-2 px-6 focus:outline-none hover:text-darkorange hover:bg-primary rounded text-lg" type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActivityDetails;
