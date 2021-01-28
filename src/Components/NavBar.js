import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">My Project</Link>
                <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                <Link to="/" className="nav-link">My Project</Link>
                </li>
                <li className="navbar-item">
                <Link to="/task" className="nav-link">Create Task</Link>
                </li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
