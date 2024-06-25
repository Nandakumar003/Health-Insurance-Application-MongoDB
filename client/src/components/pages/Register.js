//import { fetchData } from "../../main.js"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Register = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        FirstName: '',
        LastName: '',
        Username: '',
        Email: '',
        Password: '',
        ConfPassword: ''
    });
    const { FirstName, LastName, Username, Email, Password, ConfPassword } = user;

    const [errorMessage, setErrorMessage] = useState(null);

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        setErrorMessage(null);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (false) {
            setErrorMessage("Error Occured!!!");
        }
        if (Password !== ConfPassword) { setErrorMessage("Password Do not match!!😐"); }
        else {
            setErrorMessage(null);
            //     fetchData("/user/register", user, "POST")
            //         .then((data) => {
            //             if (!data.message) {
            //                 console.log(data);
            //             }
            //         })
            //         .catch((error) => {
            //             console.log(`Error! ${error.message}`)
            //         });
            // };
            console.log(user);
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/');
            window.location.reload();
        }
    }
    return (
        <div>
            <div className="container mt-4" style={{ width: '50%', padding: '10px' }}>
                <Helmet>
                    <title>NHI - Register</title>
                </Helmet>
                <form onSubmit={handleSubmit} className="card" style={{ width: '80%', padding: '10px' }}>

                    <div className="mb-3">
                        <br></br>
                        <h2 className="text-center"> New User Registration</h2>
                        <input
                            type="text"
                            className="form-control"
                            id="FirstName"
                            name='FirstName'
                            value={FirstName}
                            placeholder="First Name"
                            onChange={onChange}
                            required />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="LastName"
                            name='LastName'
                            placeholder="Last Name"
                            value={LastName}
                            onChange={onChange}
                            required />
                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="Email"
                            name='Email'
                            placeholder="Email"
                            value={Email}
                            onChange={onChange}
                            required />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="Username"
                            name='Username'
                            value={Username}
                            placeholder="Username"
                            onChange={onChange}
                            required />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            name='Password'
                            id="Password"
                            value={Password}
                            onChange={onChange}
                            placeholder="Password"
                            required />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="ConfPassword"
                            name="ConfPassword"
                            value={ConfPassword}
                            placeholder="Re-enter Password"
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
        </div>
    );
}
export default Register;
