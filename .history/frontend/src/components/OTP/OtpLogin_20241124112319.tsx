import { useState } from "react"

export default function OtpLogin() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const handleLogin : (username: any) => void = (username: any) : void =>{
        setIsLoggedIn(true);
        setUsername(username)
    }

    const handleLogin = (username) =>{
        setIsLoggedIn(true)
    }
  return (
    <section>
        <div>
            {
                isLoggedIn ? (
                    <div>

                    </div>
                ):(
                    <OtpLogin onlogin={handleLogin} />
                )
            }
        </div>
    </section>
  )
}
