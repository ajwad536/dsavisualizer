import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Start from './start'
import ArrayPage from './arraypage';
import SortingPage from './sortingpage';
import BubbleSortingPage from './bubblesortpage';
import QuickSortingPage from './quicksortingpage';
import reportWebVitals from './reportWebVitals';
import { Link, BrowserRouter as Router, Route,Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path="/about" element={<Start/>}/>
        <Route path="/array" element={<ArrayPage/>}/>
        <Route path="/quicksorting" element={<QuickSortingPage/>} /> 
        <Route path="/bubblesorting" element={<BubbleSortingPage/>} /> 
        {/* <Route path="/insertionsorting" element={<SortingPage/>} />  */}
      </Routes>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
        // {/* Define your routes */}
        // <Routes>
        //   <Route path="/array" element={<ArrayPage />} />
        //   <Route path='/bubble-sort' element={<SortingPage/>}/>
        // </Routes>
reportWebVitals();
