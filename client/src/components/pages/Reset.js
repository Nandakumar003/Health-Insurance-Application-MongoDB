import { fetchData } from "../../main.js";
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
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    if (!isUserValidated) {
        localStorage.removeItem('tempuser')
    }
    const { UsernameOrEmail, NewPassword, ConfirmPassword } = user;
    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        setErrorMessage(null);
    };

    const validateUser = (e) => {
        e.preventDefault();
        fetchData("/user/searchUser", user, "POST")
            .then((data) => {
                if (!data.message) {
                    localStorage.setItem('tempuser', JSON.stringify(data));
                    setIsUserValidated(true);
                    setErrorMessage(null);
                    const retrievedUser = JSON.parse(localStorage.getItem('tempuser'));
                    setMessage(`Hi <strong>${retrievedUser.LastName}, ${retrievedUser.FirstName}</strong>. Please proceed in resetting your password!! 😊`);
                }
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (NewPassword !== ConfirmPassword) {
            setErrorMessage("Passwords do not match!😐");
            return;
        }
        else {
            const retrievedUser = JSON.parse(localStorage.getItem('tempuser'));
            const user1 =
            {
                id: retrievedUser._id,
                Password: user.NewPassword
            }
            fetchData("/user/update", user1, "PUT")
                .then((data) => {
                    if (!data.message) {
                        localStorage.removeItem('tempuser');
                        localStorage.setItem('user', JSON.stringify(data));
                        window.alert('Password reset Successfull!!😉')
                        navigate('/');
                        window.location.reload();

                    }
                })
                .catch((error) => {
                    setErrorMessage(error.message);
                });
        }
    };

    return (
        <div>
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
                        <>
                            <button onClick={validateUser} className="btn btn-primary">Validate</button>
                            {!isUserValidated && errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
                        </>
                    ) : (
                        <>
                            <div className="text-center" dangerouslySetInnerHTML={{ __html: message }}></div>
                            <br></br>
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
                    {isUserValidated && errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
                </form>
            </div>
            <footer className="Footer">
                <p>&copy; 2024 <strong>Nanda Health Insurance Pvt Ltd</strong>. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default Reset;
