import { useState, useEffect } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import '../stylesheet/Navbar.css';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        setIsLoggedIn(user !== null);
    }, []);

    const handleLogout = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        alert(`Thanks ${user.LastName}, ${user.FirstName}. See You Again 😉`)
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        navigate('/');
        window.location.reload();
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
                        <ul className="navbar-nav">
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
                                        <button className="nav-link btn btn-link" onClick={handleLogout}>
                                            Logout
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                            to="/Reset">
                                            Update Password
                                        </NavLink>
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
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    );
};

export default Navbar;
