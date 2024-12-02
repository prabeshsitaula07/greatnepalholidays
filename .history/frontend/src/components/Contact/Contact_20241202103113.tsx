import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const serviceId = 'service_qk2morn';
        const templateId = 'template_owilfgz';
        const publicKey = 'mEWCEwNqIHDwNp7oz';

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Great Nepal Holidays',
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email Sent Successfully!', response);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error sending email: ', error);
            });
    };

    return (
        <>
            <section className="text-gray-600 body-font relative mx-auto">
                <h2 className="mt-10 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black text-center"><span className="text-darkorange">Contact</span> Us</h2>
                <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap md:px-24">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe
                            width="100%"
                            height="100%"
                            className="absolute inset-0"
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.628177055184!2d85.32309027492384!3d27.72876432454742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb193e98fea663%3A0x6a69a4b662ec372!2sGREAT%20NEPAL%20HOLIDAYS%20P.LTD!5e0!3m2!1sen!2snp!4v1732272072112!5m2!1sen!2snp"
                            style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
                        ></iframe>
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1"></p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <a className="text-darkorange leading-relaxed">info@greatnepalholidays.com</a>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <p className="leading-relaxed">+977 9851064446 </p>
                            </div>
                        </div>
                    </div>
                    <form className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0" onSubmit={handleSubmit}>
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">Feel free to Contact Us</p>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-darkorange focus:ring-2 focus:ring-darkorange text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={name}
                                onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-darkorange focus:ring-2 focus:ring-darkorange text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-darkorange focus:ring-2 focus:ring-darkorange h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" value={message}
                                onChange={(e) => setMessage(e.target.value)} ></textarea>
                        </div>
                        <button className="bg-darkorange border border-darkorange text-primary py-2 px-6 focus:outline-none hover:text-darkorange hover:bg-primary rounded text-lg" type="submit">Send</button>
                        <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                    </form>
                </div>
            </section>
        </>
    )
}
