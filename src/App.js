import React, { useState } from 'react';
import './App.css'
import  Home  from './Components/Home/Home'
// import { config } from 'dotenv';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetails } from './Components/ItemDetails/ItemDetails';
import Dashboard from './Components/Admin/Dashboard/Dashboard';
import Login from './Components/Admin/Login/Login';

export function App() { 
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/item' element={<ItemDetails/>}/>
                <Route path='/admin' element={<Login/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
            </Routes>
        </BrowserRouter>
    );
}
