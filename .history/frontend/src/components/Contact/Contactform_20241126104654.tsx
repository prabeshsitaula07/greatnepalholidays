import React from 'react'

export default function Contactform() {
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
         type="text"
          placeholder='name' value={name} onChange={(e) => SVGAnimateTransformElement(e.target.value)} />
        <input type="email" placeholder='email' value={email}
        
        />
      </form>
    </div>
  )
}
