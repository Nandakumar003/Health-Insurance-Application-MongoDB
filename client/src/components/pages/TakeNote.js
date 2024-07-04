import { fetchData } from "../../main.js";
import { useState } from "react";
import { Helmet } from 'react-helmet';

const Notes = () => {
    const [notes, setNotes] = useState({
        id: '123',
        NotesDetail: ''
    });
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const onChange = (e) => {
        setNotes({ ...notes, [e.target.name]: e.target.value });
        setErrorMessage(null);
        setSuccessMessage(null);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (notes.NotesDetail.trim() === "") {
            setErrorMessage("Please enter a note before hitting submit!! 🙃");
        } else {
            const retrievedUser = JSON.parse(localStorage.getItem('user'));
            const usernotes = {
                id: retrievedUser._id,
                NotesDetail: notes.NotesDetail
            };

            fetchData("/note/add", usernotes, "POST")
                .then((data) => {
                    if (data.Success.indexOf("Notes Added") !== -1) {
                        setSuccessMessage(`👍🏻 "${usernotes.NotesDetail}" was added successfully to MongoDB.`);
                    }
                })
                .catch((error) => {
                    setErrorMessage(`Error: ${error.message}`);
                });
        }
    }

    return (
        <div>
            <div className="container mt-4" style={{ width: '50%', padding: '10px' }}>
                <Helmet>
                    <title>NHI - Take Notes</title>
                </Helmet>
                <form onSubmit={handleSubmit} className="card" style={{ width: '80%', padding: '10px' }}>
                    <div className="mb-3">
                        <br />
                        <h2 className="text-center">Take Notes</h2>
                        <textarea
                            style={{ height: '200px', resize: 'none' }}
                            className="form-control"
                            placeholder="Enter Your Notes"
                            id="NotesDetail"
                            name='NotesDetail'
                            value={notes.NotesDetail}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
                    {successMessage && <div className="alert alert-success mt-3" dangerouslySetInnerHTML={{ __html: successMessage }}></div>}
                </form>
            </div>
            <footer className="Footer">
                <p>&copy; 2024 <strong>Nanda Health Insurance Pvt Ltd</strong>. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default Notes;
