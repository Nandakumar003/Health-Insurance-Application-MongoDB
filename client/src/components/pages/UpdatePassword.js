// import { fetchData } from "../../main.js"
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

        <div className="container mt-4" style={{ width: '50%', padding: '10px' }}>
            <Helmet>
                <title>NHI - Update Password</title>
            </Helmet>
            <form onSubmit={handleSubmit} className="card" style={{ width: '80%', padding: '10px' }}>
                <br></br>
                <h2 className="text-center">Update Password</h2>

                <div className="mb-3">
                    <input
                        type="text"
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
            </form>
        </div >
    );
}

export default Password;