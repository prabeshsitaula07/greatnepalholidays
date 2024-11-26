import { useState } from "react"

export default function Contactform() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();

        const serviceId = 'service_rc79o4r'
        const 
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
