import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchAction } from "../store/actions/fetchSearch-action";
import { fetchProgamNewsAction } from "../store/actions/fetchProgamNews-action";

import PropTypes from 'prop-types'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function Navbar({ toggleTheme, currentTheme }) {
    const [text, setText] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const clickHandler = () => {
        navigate(`/search/${text}`);
        dispatch(fetchSearchAction(text));
    };

    const inputText = (txt) => {
        setText(txt.target.value);
    };

    const handlefetchProgramAction = () => {
        dispatch(fetchProgamNewsAction());
    };

    const navbarClass =
        currentTheme === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light";
    const textColor = currentTheme === "dark" ? "text-white" : "text-dark";

    return (
        <nav className={`navbar shadow ${navbarClass}`}>
        <div className="container-fluid px-5">
            <Link className={`fs-2 fw-bold navbar-brand ${textColor}`} to="/">
            Beritamu
            </Link>
            <ul className="nav">
            <li className="nav-item">
                <Link
                className={`nav-link ${textColor}`}
                aria-current="page"
                to="/Indonesia"
                >
                Indonesia
                </Link>
            </li>
            <li className="nav-item">
                <Link
                className={`nav-link ${textColor}`}
                to="/Progamming"
                onClick={handlefetchProgramAction}
                >
                Programming
                </Link>
            </li>
            <li className="nav-item">
                <Link className={`nav-link ${textColor}`} to="/Saved">
                Saved
                </Link>
            </li>
            </ul>
            <div className="d-flex align-items-center">
            <input
                onChange={inputText}
                type="text"
                className="form-control me-3"
                placeholder="Cari Berita"
            />
            <button onClick={clickHandler} className="btn btn-outline-secondary">
                Cari
            </button>
            <button
            className={`btn ${currentTheme === "dark" ? "btn-outline-primary" : "btn-outline-success"} ms-3`}
            onClick={toggleTheme}
            >
                <FontAwesomeIcon icon={currentTheme === "dark" ? faSun : faMoon} />
            </button>
            </div>
        </div>
        </nav>
    );
}

Navbar.propTypes = {
    toggleTheme: PropTypes.func.isRequired, 
    currentTheme: PropTypes.oneOf(['dark', 'light']).isRequired, 
};

export default Navbar;
