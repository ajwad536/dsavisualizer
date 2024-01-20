import React from 'react';
import Navbarz from './Navbar';
import { useLocation } from 'react-router-dom';
import SortingVisualizer from './visualizer';
import quickSort from './quicksort';
import "./algodescrip.css"

function QuickSortingPage() {


  return (
    <div>
      <Navbarz />
      <SortingVisualizer sortingAlgorithm={quickSort} />
      <p className='algodescription'>
        Quick Sort is a divide-and-conquer algorithm. It works by selecting a 'pivot' element and partitioning the other elements into two sub-arrays.
      </p>
    </div>
  );
}

export default QuickSortingPage;
