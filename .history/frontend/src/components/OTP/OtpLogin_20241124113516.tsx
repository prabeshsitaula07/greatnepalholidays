import { useState } from "react"

export default function OtpLogin() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const OtpLogin = ({ onLogin }) => {
        const [email, setEmail] = useState('');
        const [otp, setOtp] = useState(["", "", "", ""]);
        const [error, setError] = useState('');
        const [isEmailVerified, setisEmailVerified] = useState(false);
        const [loading, setLoading] = useState(false);

        return(
            <div>
            {
                !isEmailVerified ? (
                    <>
                    <h1>Enter Your Email:</h1>
                    <input 
                    type="text" placeholder="test@example.com"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    />
                    {
                        error && <span>
                            {error}
                        </span>
                    }
                    <div>
                        <button onClick={handleEmailVerification}>
                            Verify Email
                        </button>
                    </div>
                    </>
                ):(
                    <>
                    
                    </>
                )
            }
            </div>
        )
    }

    const handleLogin: (username: any) => void = (username: any): void => {
        setIsLoggedIn(true);
        setUsername(username)
    }
    const handleLogout: () => void = (): void => {
        setIsLoggedIn(false);
        setUsername('');
    }

    const handleLogin = (username) => {
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
                    ) : (
                        <OtpLogin onlogin={handleLogin} />
                    )
                }
            </div>
        </section>
    )
}