import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { fetchData } from '../../main.js';

const UserDetailContainer = () => {
    const [userData, setUserData] = useState(null);
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        // Fetch data from local storage
        const storedData = localStorage.getItem('user');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setUserData(parsedData);
            // Fetch user notes
            fetchUserNotes(parsedData._id); // Assuming the user ID is stored in the _id field
        }
    }, []);

    const fetchUserNotes = async (userId) => {
        try {
            const response = await fetchData(`/getUserNotes?userId=${userId}`, {}, 'GET');
            setNotes(response);
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    };

    return (
        <div>
            <div className="container mt-4" style={{ width: '50%', padding: '10px' }}>
                <Helmet>
                    <title>NHI - Profile</title>
                </Helmet>

                {userData ? (
                    <div className="card">
                        <br></br>
                        <h2 className="text-center">User Details</h2>
                        <div className="card-body">
                            <p><strong>First Name:</strong> {userData.FirstName}</p>
                            <p><strong>Last Name:</strong> {userData.LastName}</p>
                            <p><strong>Username:</strong> {userData.Username}</p>
                            <p><strong>Email:</strong> {userData.Email}</p>
                        </div>
                        <br></br>
                        <h2 className="text-center">User Notes</h2>
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Note ID</th>
                                        <th>Details</th>
                                        <th>Created At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {notes.map(note => (
                                        <tr key={note._id}>
                                            <td>{note._id}</td>
                                            <td>{note.NotesDetail}</td>
                                            <td>{new Date(note.createdAt).toLocaleString()}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <div className="alert alert-warning" role="alert">
                        No user data found in local storage.
                    </div>
                )}
            </div>
            <footer className="Footer">
                <p>&copy; 2024 <strong>Nanda Health Insurance Pvt Ltd</strong>. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default UserDetailContainer;
