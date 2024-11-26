import React from 'react'

export default function Contactform() {
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
        onChange={(e) => setMessage()}
        ></textarea>
      </form>
    </div>
  )
}
