import { useState } from "react"

export default function OtpLogin() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
  return (
    <section>
        <div>
            {
                isLoggedIn ? (
                    <div>
                        
                    </div>
                )
            }
        </div>
    </section>
  )
}
