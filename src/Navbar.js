import React from 'react';
import { Link, BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './navbar.css';
import ArrayPage from './arraypage.js'; // Import the ArrayPage component
import SortingPage from './sortingpage.js';
import bubbleSort from './bubblesort.js';
import quickSort from './quicksort.js';
import logo from './logo.svg'

function Navbarz() {
  return (
      <div className="navbar">
        <div className="left-section">
          <Link to="/about">
            <button className="nav-button">About</button>
          </Link>
          <div className="dropdown">
            <button className="nav-button">Data Structure</button>
            <div className="dropdown-content">
              <Link to="/array">Array</Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="nav-button">Sorting</button>
            <div className="dropdown-content">
              <Link to="/bubblesorting">Bubble Sort</Link>
              <Link to="/quicksorting">Quick Sort</Link>
            </div>
          </div>
        </div>
        <div className="right-section">
          {/* Add your logo here */}
          <img src={logo} alt="Logo" className="logo" />
        </div>



      </div>
  );
}

export default Navbarz;
