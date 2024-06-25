// import { fetchData } from "../../main.js"
import { useState } from "react";

const Register = () => {
    const [user, setUser] = useState({
        FirstName: '',
        LastName: '',
        Username: '',
        Email: '',
        Password: ''
    });
    const { FirstName, LastName, Username, Email, Password } = user;

    const [errorMessage, setErrorMessage] = useState(null);

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        setErrorMessage(null);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (true) {
            setErrorMessage("Error Occured!!!");
        } else {
            setErrorMessage(null);
        }
    }
    return (
        <div className="w-50">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="FirstName" className="form-label">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="FirstName"
                        name='FirstName'
                        value={FirstName}
                        onChange={onChange}
                        required />
                </div>
                <div className="mb-3">
                    <label htmlFor="LastName" className="form-label">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="LastName"
                        name='LastName'
                        value={LastName}
                        onChange={onChange}
                        required />
                </div>
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="Email"
                        name='Email'
                        value={Email}
                        onChange={onChange}
                        required />
                </div>
                <div className="mb-3">
                    <label htmlFor="Username" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="Username"
                        name='Username'
                        value={Username}
                        onChange={onChange}
                        required />
                </div>
                <div className="mb-3">
                    <label htmlFor="Password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name='Password'
                        id="Password"
                        value={Password}
                        onChange={onChange}
                        required />
                </div>
                <div className="mb-3">
                    <label htmlFor="ConfPassword" className="form-label">Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="ConfPassword"
                        name="ConfPassword"
                        onChange={onChange}
                        required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
            </form>
        </div>
    );
}

export default Register;
