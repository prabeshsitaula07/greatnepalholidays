import { useState } from "react"
import OTPInput from "react-otp-input";

const OtpLogin = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [error, setError] = useState('');
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const [loading, setLoading] = useState(false);

    const validateEmail = (email)=> {
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        return isValidEmail;
    }

    const handleEmailVerification = () => {
        if (validateEmail(email)) {
            setLoading(true);
            setTimeout(() => {
                setIsEmailVerified(true);
                setLoading(false);
                setError('');
            }, 2000);
        }
        else {
            setError("Invalid Email");
        }
    }

    const handleOTPVerification = () => {
        const enteredOTP = otp.join('');
        if (/^\d{4}$/.test(enteredOTP)) {
            const username = email.split('@'[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1));
            onLogin(username)
        }
        else{
            setError('Invalid OTP');
        }
    }

    return (
        <div>
            {
                !isEmailVerified ? (
                    <>
                        <h1>Enter Your Email:</h1>
                        <input
                            type="text" placeholder="test@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                ) : (
                    <>
                        <h1>
                            Enter Your Otp:
                        </h1>
                        <div>
                            <OTPInput
                                value={otp.join('')}
                                onChange={(value) => setOtp(value.split(''))}
                                numInputs={4}
                                isInputNum
                                renderInput={(inputProps, index) => <input {...inputProps} key={index} />}
                            />
                        </div>
                        {
                            error && <span>
                                {error}
                            </span>
                        }
                        <div>
                            <button onClick={handleOTPVerification}>
                                Login
                            </button>
                        </div>
                    </>
                )
            }
        </div>
    )
}

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
