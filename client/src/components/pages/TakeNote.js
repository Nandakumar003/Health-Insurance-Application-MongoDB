//import { fetchData } from "../../main.js"
import { useState } from "react";
import { Helmet } from 'react-helmet';
const Notes = () => {
    const [Notes, SetNotes] = useState({
        id: '123',
        NotesDetail: ''
    });
    const { id, NotesDetail } = Notes;
    const onChange = (e) => {
        SetNotes({ ...Notes, [e.target.name]: e.target.value });
        setErrorMessage(null);
    }

    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (false) {
            setErrorMessage("Error Occured!!!");
        }
        else {
            setErrorMessage(null);
            console.log(Notes);
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
                        <br></br>
                        <h2 className="text-center">Take Notes</h2>

                        <textarea style={{ height: '200px', resize: 'none' }}
                            className="form-control"
                            placeholder="Enter Your Notes"
                            id="NotesDetail"
                            name='NotesDetail'
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

export default Notes;