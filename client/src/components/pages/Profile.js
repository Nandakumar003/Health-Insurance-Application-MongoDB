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
        <div className="container mt-4">
            <Helmet>
                <title>NHI - Profile</title>
            </Helmet>

            {userData ? (
                <div className="card">
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
    );
};

export default UserDetailContainer;
