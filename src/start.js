import React, { useState } from 'react';
import Navbarz from './Navbar';
import ArrayVisualization from './arrayvisualizer.js';
import SortingVisualizer from './visualizer';
import bubbleSort from './bubblesort.js'; // Import your sorting algorithms
import quickSort from './quicksort';
import "./algodescrip.css"

function Start(){
  return (
    <div>
        <Navbarz/>
        <p className='aboutpage'>
Welcome to our Visualization Project! Developed and maintained by students from Eastern University's Computer Science and Engineering Department, this project offers an interactive platform for exploring various algorithms. Dive into the world of data structures and sorting methods, and enjoy an educational experience crafted by aspiring engineers. Join us on this journey through the complexities of algorithms and data manipulation.</p>
        {/* <SortingVisualizer sortingAlgorithm={bubbleSort}/> */}
    </div>
  );
};
    


export default Start;