import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function DownloadVisaCheckList() {

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
    
  return (
    <div>
      
    </div>
  )
}
