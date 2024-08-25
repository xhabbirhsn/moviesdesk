import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Search from '../Search/Serach.jsx';
import './Navbar.css'
import logo from '../../Assets/logo.png' 

export function Navbar() {

    return (
        <>
            <div className="navbar bg-zinc-950">
                <div className="navbar-left">
                    <img src={logo} alt="Logo" className="logo"/>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li>Help?</li>
                        <li>Join Group !</li>
                        <li><Link to='converter'>request</Link></li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <Search />
                </div>
            </div>
        </>
    )
}
