import React, { useState, useEffect } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import '../stylesheet/Navbar.css';
import { fetchData } from "../../main.js"

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setIsLoggedIn(true);
            setUserName(`${user.LastName}, ${user.FirstName}`);
        }
    }, []);

    const handleLogout = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        alert(`Thanks ${user.LastName}, ${user.FirstName}. See You Again 😉`);
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        setUserName('');
        navigate('/');
        window.location.reload();
    };

    const showDeletePopup = () => {
        setShowDeleteConfirmation(true);
    };

    const hideDeletePopup = () => {
        setShowDeleteConfirmation(false);
    };

    const handleDeleteAccount = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        const del = { id: user._id }
        fetchData("/user/delete", del, "DELETE")
            .then((data) => {
                if (data.success === "Account deleted") {
                    window.alert('Wish to see you again!!😔')
                    localStorage.removeItem('user');
                    setIsLoggedIn(false);
                    setUserName('');
                    navigate('/');
                    window.location.reload();
                }
            })
            .catch((error) => {
                window.alert(error.message);
            });

    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <NavLink
                        className={({ isActive }) => isActive ? "navbar-brand active" : "navbar-brand"}
                        to="/">
                        Home
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            {isLoggedIn ? (
                                <>
                                    <li className="nav-item">
                                        <NavLink
                                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                            to="/Profile">
                                            Profile
                                        </NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink
                                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                            to="/Notes">
                                            Take Notes
                                        </NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink
                                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                            to="/Password">
                                            Update Password
                                        </NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <button className="nav-link btn btn-link" onClick={showDeletePopup}>
                                            Delete Account
                                        </button>
                                    </li>

                                    <li className="nav-item">
                                        <button className="nav-link btn btn-link" onClick={handleLogout}>
                                            Logout
                                        </button>
                                    </li>

                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <NavLink
                                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                            to="/Register">
                                            Register
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                            to="/Login">
                                            Login
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                            to="/Reset">
                                            Reset
                                        </NavLink>
                                    </li>
                                </>
                            )}
                        </ul>
                        {isLoggedIn && (
                            <span className="navbar-text ms-auto text-white fw-bold">
                                {userName}
                            </span>
                        )}
                    </div>
                </div>
            </nav>
            {showDeleteConfirmation && (
                <div className="popup">
                    <div className="popup-content">
                        <p>Are you sure you want to delete your account?</p>
                        <div className="popup-buttons">
                            <button className="btn btn-danger" onClick={handleDeleteAccount}>OK</button>
                            <button className="btn btn-secondary" onClick={hideDeletePopup}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
            <Outlet />
        </div>
    );
};

export default Navbar;
