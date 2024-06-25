// import { fetchData } from "../../main.js"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Reset = () => {

    const [user, setUser] = useState({
        Username: '',
        Email: ''
    });
    const { Username, Email } = user;

    const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })

    // const onSubmit = (e) => {
    //     e.preventDefault();

    //     fetchData("/users_mongo/register", user, "POST")
    //         .then((data) => {
    //             if (!data.message) {
    //                 console.log(data);
    //             }
    //         })
    //         .catch((error) => {
    //             console.log(`Error! ${error.message}`)
    //         });
    // };

    return (
        <div className="w-50">
            <form>
                <div className="mb-3">
                    <label for="FirstName" className="form-label">Username/Email</label>
                    <input
                        type="text"
                        className="form-control"
                        id="FirstName"
                        name='FirstName'
                        required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div >
    );
}

export default Reset;