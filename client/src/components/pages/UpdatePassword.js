import { fetchData } from "../../main.js"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';
const Password = () => {

    const [user, setUser] = useState({
        Password: '',
        ConfPassword: ''
    });
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null);
    const { Password, ConfPassword } = user;
    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        setErrorMessage(null);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (Password !== ConfPassword) {
            setErrorMessage(`Password do not Match!!😐`)
        }
        else {
            const retrievedUser = JSON.parse(localStorage.getItem('user'));
            const user1 =
            {
                id: retrievedUser._id,
                Password: user.Password
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
    const retrievedUser = JSON.parse(localStorage.getItem('user'));
    const message = (`Hi <strong>${retrievedUser.LastName}, ${retrievedUser.FirstName}</strong>. Please proceed in reseting your password!!`);
    return (
        <div>
            <div className="container mt-4" style={{ width: '50%', padding: '10px' }}>
                <Helmet>
                    <title>NHI - Update Password</title>
                </Helmet>
                <form onSubmit={handleSubmit} className="card" style={{ width: '80%', padding: '10px' }}>
                    <br></br>
                    <h2 className="text-center">Update Password</h2>
                    <br></br>
                    <div className="text-center" dangerouslySetInnerHTML={{ __html: message }}></div>
                    <br></br>
                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter New Password"
                            id="Password"
                            name='Password'
                            onChange={onChange}
                            required />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            name='ConfPassword'
                            id="ConfPassword"
                            placeholder="Re-Enter Password"
                            onChange={onChange}
                            required />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
                </form>
            </div>
            <footer className="Footer">
                <p>&copy; 2024 <strong>Nanda Health Insurance Pvt Ltd</strong>. All Rights Reserved.</p>
            </footer>
        </div >
    );
}

export default Password;