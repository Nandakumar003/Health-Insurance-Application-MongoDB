import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';

const Reset = () => {
    const [user, setUser] = useState({
        UsernameOrEmail: '',
        NewPassword: '',
        ConfirmPassword: ''
    });
    const [isUserValidated, setIsUserValidated] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

    const { UsernameOrEmail, NewPassword, ConfirmPassword } = user;

    const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

    const validateUser = (e) => {
        e.preventDefault();
        // Replace this with actual validation logic
        const userExists = true; // Replace with actual validation check
        if (userExists) {
            setIsUserValidated(true);
            setErrorMessage(null);
        } else {
            setErrorMessage("User not found!");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (NewPassword !== ConfirmPassword) {
            setErrorMessage("Passwords do not match!");
            return;
        }
        // Replace this with actual password update logic
        console.log(user);
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/');
        window.location.reload();
    };

    return (
        <div className="container mt-4" style={{ width: '50%', padding: '10px' }}>
            <Helmet>
                <title>NHI - Reset</title>
            </Helmet>
            <form className="card" style={{ width: '80%', padding: '10px' }}>
                <div className="mb-3">
                    <br />
                    <h2 className="text-center">Reset Credentials</h2>
                    <input
                        type="text"
                        className="form-control"
                        id="UsernameOrEmail"
                        name="UsernameOrEmail"
                        placeholder="Username or Email"
                        value={UsernameOrEmail}
                        onChange={onChange}
                        required
                        disabled={isUserValidated}
                    />
                </div>
                {!isUserValidated ? (
                    <button onClick={validateUser} className="btn btn-primary">Validate</button>
                ) : (
                    <>
                        <div className="mb-3">
                            <input
                                type="password"
                                className="form-control"
                                id="NewPassword"
                                name="NewPassword"
                                placeholder="New Password"
                                value={NewPassword}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                className="form-control"
                                id="ConfirmPassword"
                                name="ConfirmPassword"
                                placeholder="Confirm Password"
                                value={ConfirmPassword}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <button onClick={handleSubmit} className={`btn ${isUserValidated ? 'btn-success' : 'btn-primary'}`}>Submit</button>
                    </>
                )}
                {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
            </form>
        </div>
    );
}

export default Reset;
