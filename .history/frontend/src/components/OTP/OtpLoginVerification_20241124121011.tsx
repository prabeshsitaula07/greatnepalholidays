import { useState } from "react"
import OTPInput from "react-otp-input";

export default function OtpLoginVerification() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');


    const handleLogin: (username: any) => void = (username: any): void => {
        setIsLoggedIn(true);
        setUsername(username)
    }
    const handleLogout: () => void = (): void => {
        setIsLoggedIn(false);
        setUsername('');
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
                        <OtpLogin onLogin={handleLogin} />
                    )
                }
            </div>
        </section>
    )
}
