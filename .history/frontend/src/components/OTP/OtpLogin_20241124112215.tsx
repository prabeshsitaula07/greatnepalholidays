import { useState } from "react"

export default function OtpLogin() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const handleLogin : (username: any) => void = (username: any) : void =>
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
