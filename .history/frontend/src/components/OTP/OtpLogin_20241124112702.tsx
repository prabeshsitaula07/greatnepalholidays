import { useState } from "react"

export default function OtpLogin() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const OtpLogin = ({onLogin})=> {

    }

    const handleLogin : (username: any) => void = (username: any) : void =>{
        setIsLoggedIn(true);
        setUsername(username)
    }
    const handleLogout : () => void = () : void =>{
        setIsLoggedIn(false);
        setUsername('');
    }

    const handleLogin = (username) =>{
        setIsLoggedIn(true);
        setUsername(username)
    }
  return (
    <section>
        <div>
            {
                isLoggedIn ? (
                    <div>
<h1>
    Welcome, {username}
    <button onClick={handleLogout}>
        Logout
    </button>
</h1>
                    </div>
                ):(
                    <OtpLogin onlogin={handleLogin} />
                )
            }
        </div>
    </section>
  )
}