import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar">
        <h1>Classroom Finder</h1>
        <div className="links">
            <a href="/">Home</a>
            <a href="/create">New Classroom</a>
        </div>
        </nav>
    );
}