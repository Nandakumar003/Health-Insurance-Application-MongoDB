import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const UserDetailContainer = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Fetch data from local storage
        const storedData = localStorage.getItem('user');
        if (storedData) {
            setUserData(JSON.parse(storedData));
        }
    }, []);

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
