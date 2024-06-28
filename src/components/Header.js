import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <h1 className="header-title">Welcome to Vacation Scheduler</h1>
                <nav className="header-nav">
                    <ul className="header-menu">
                        <li className="header-menu-item"><Link to="/" className="header-menu-link">Home</Link></li>
                        <li className="header-menu-item"><Link to="/vacations" className="header-menu-link">View Vacations</Link></li>
                        <li className="header-menu-item"><Link to="/add-vacation" className="header-menu-link">Add Vacation</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;