import React from 'react';
import Navbarz from './Navbar';
import { useLocation } from 'react-router-dom';
import SortingVisualizer from './visualizer';
import bubbleSort from './bubblesort';
import quickSort from './quicksort';

function SortingPage() {
  // Use useLocation hook to get the current location
  let location = useLocation();
  // Access sorting algorithm from state
  // const sortFunction = location.state?.sortingfunction;
  console.log(location);

  return (
    <div>
      <Navbarz />
      <SortingVisualizer sortingAlgorithm={bubbleSort} />
    </div>
  );
}

export default SortingPage;
