// import { fetchData } from "../../main.js"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';
const Login = () => {

    const [user, setUser] = useState({
        Username: '',
        Email: '',
        Password: ''
    });
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null);

    const { Username, Email, Password } = user;
    const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })
    const handleSubmit = (e) => {
        e.preventDefault();
        if (false) {
            setErrorMessage("Error Occured!!!");
        }
        else {
            setErrorMessage(null);
            //     fetchData("/user/login", user, "POST")
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
                    <title>NHI - Login</title>
                </Helmet>
                <form onSubmit={handleSubmit} className="card" style={{ width: '80%', padding: '10px' }}>
                    <div className="mb-3">
                        <br></br>
                        <h2 className="text-center">User Login</h2>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username/Email"
                            id="Username"
                            name='Username'
                            onChange={onChange}
                            required />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            name='Password'
                            id="Password"
                            placeholder="Enter Password"
                            onChange={onChange}
                            required />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <footer className="Footer">
                <p>&copy; 2024 <strong>Nanda Health Insurance Pvt Ltd</strong>. All Rights Reserved.</p>
            </footer>
        </div >
    );
}

export default Login;