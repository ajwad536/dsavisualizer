import React from 'react';
import Navbarz from './Navbar';
import { useLocation } from 'react-router-dom';
import SortingVisualizer from './visualizer';
import bubbleSort from './bubblesort';

function BubbleSortingPage() {

  return (
    <div>
      <Navbarz />
      <SortingVisualizer sortingAlgorithm={bubbleSort} />
      <p className='algodescription'>
          Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
      </p>

    </div>
  );
}

export default BubbleSortingPage;
