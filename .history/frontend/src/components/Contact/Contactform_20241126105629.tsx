import { useState } from "react"

export default function Contactform() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();

        const serviceId = 'service_rc79o4r';
        const templateId = 'template_mappfvm';
        const publicKey = 'pULg3pg_1fGHc_Zjn';

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Great Nepal Holidays',
            message: message,
        }

        EmailJSResponseStatus.send(serviceId, templateId, templateParams, publicKey).then((response)=>{
            console.log('Email Sent Successfully!', response);
            setName('');
            setEmail('');
            setMessage('');
        })
        .catch((error) =>{
            console.error('Error sending email: ', error);
        })
    }


  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
         type="text"
          placeholder='name'
           value={name}
            onChange={(e) => SetName(e.target.value)}
             />
        <input
         type="email"
          placeholder='email'
           value={email}
        onChange={(e) => SetEmail(e.target.value)}
        />
        <textarea name="" id=""
        onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}
