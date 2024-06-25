import { fetchData } from "../../main.js"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const [user, setUser] = useState({
        Firstname: '',
        LastName: '',
        Username: '',
        Email: '',
        Password: ''
    });
    const { Firstname, LastName, Username, Email, Password } = user;

    const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })

    const onSubmit = (e) => {
        e.preventDefault();

        fetchData("/users_mongo/register", user, "POST")
            .then((data) => {
                if (!data.message) {
                    console.log(data);
                }
            })
            .catch((error) => {
                console.log(`Error! ${error.message}`)
            });
    };

    return (
        <div>
            <form>
                <div className="mb-3">
                    <label for="FirstName" className="form-label">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="FirstName"
                        name='FirstName'
                        required />
                </div>
                <div className="mb-3">
                    <label for="LastName" className="form-label">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="LastName"
                        name='LastName'
                        required />
                </div>
                <div className="mb-3">
                    <label for="Email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="Email"
                        name='Email'
                        required />
                </div>
                <div className="mb-3">
                    <label for="Username" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="Username"
                        name='Username'
                        required />
                </div>
                <div className="mb-3">
                    <label hmtlFor="Password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name='Password'
                        id="Password"
                        required />
                </div>
                <div className="mb-3">
                    <label hmtlFor="ConfPassword" className="form-label">Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="ConfPassword"
                        name="ConfPassword"
                        required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Register;