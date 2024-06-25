import { Outlet, NavLink } from "react-router-dom";
import '../stylesheet/Navbar.css';

const Navbar = () => {
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
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default Navbar;
