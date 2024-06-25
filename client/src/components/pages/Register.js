import { fetchData } from "../../main.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: '',
        password: '',
        password2: ''
    });
    const { username, password, password2 } = user;

    const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })

    const onSubmit = (e) => {
        e.preventDefault();

        fetchData("/users_mongo/register", user, "POST")
            .then((data) => {
                if (!data.message) {
                    navigate("/books");
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
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        name='username'
                        required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label hmtlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={onChange}
                        value={password} />

                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Register;