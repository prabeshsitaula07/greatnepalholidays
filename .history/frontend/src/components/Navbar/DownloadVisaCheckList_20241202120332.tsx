import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function DownloadVisaCheckList() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pnumber, setPnumber] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const serviceId = 'service_qk2morn';
        const templateId = 'template_owilfgz';
        const publicKey = 'mEWCEwNqIHDwNp7oz';

        const templateParams = {
            from_name: name,
            from_email: email,
            from_pnumber: pnumber,
            to_name: 'Great Nepal Holidays',
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email Sent Successfully!', response);
                setName('');
                setEmail('');
                setPnumber('');
            })
            .catch((error) => {
                console.error('Error sending email: ', error);
            });
    };

    return (
        <div className="fixed z-50 h-screen w-screen">
            <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>
            <form className="bg-white flex flex-col md:ml-auto p-4 mt-8 md:mt-0 absolute inset-0 m-auto w-full max-w-md h-fit rounded-lg shadow-lg z-50"
                onSubmit={handleSubmit}>
                <div className="relative mb-4">
                    <label htmlFor="name" className="leading-7 text-lg text-black">Name</label>
                    <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-darkorange focus:ring-2 focus:ring-darkorange text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={name}
                        placeholder='Your Name: '
                        onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="email" className="leading-7 text-lg text-black">Email</label>
                    <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-darkorange focus:ring-2 focus:ring-darkorange text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={email}
                        placeholder='Your Email: '
                        onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="pnumber" className="leading-7 text-lg text-black">Number</label>
                    <input type="number" id="pnumber" name="pnumber" className="w-full bg-white rounded border border-gray-300 focus:border-darkorange focus:ring-2 focus:ring-darkorange text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={pnumber}
                        placeholder='Your Number: '
                        onChange={(e) => setPnumber(e.target.value)} required />
                </div>
                <button className="bg-darkorange border border-darkorange text-primary py-2 px-6 focus:outline-none hover:text-darkorange hover:bg-primary rounded text-lg" type="submit">Download Visa Checklist</button>
            </form>
        </div>
    )
}
