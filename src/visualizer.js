// SortingVisualizer.js

import React, { useState, useEffect } from 'react';
import './sort.css'

const SortingVisualizer = ({ sortingAlgorithm }) => {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(50); // Default speed
  const [sorting, setSorting] = useState(false);

  const generateRandomArray = (size) => {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 1);
  };

  useEffect(() => {
    generateNewArray();
  }, []);

  const generateNewArray = () => {
    setSorting(false);
    const newArray = generateRandomArray(10); // Change the size as needed
    setArray(newArray);
  };

  const handleSpeedChange = (event) => {
    setSpeed(event.target.value);
  };

  const sleep = (ms) => {
    const adjustedSpeed = Math.max(1, (200 - speed) * 2); // Double the slowest setting
    return new Promise(resolve => setTimeout(resolve, adjustedSpeed));
  };

  const swap = async (arr, i, j) => {
    
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    // Highlight the bars being swapped
    const bars = document.querySelectorAll('.array-bar');
    bars[i].classList.add('swapping');
    bars[j].classList.add('swapping');

    setArray([...arr]);
    await sleep();

    // Remove the highlight after the swap animation
    bars[i].classList.remove('swapping');
    bars[j].classList.remove('swapping');    

  };

  const startSorting = async () => {
    setSorting(true);
    await sortingAlgorithm(array, swap);
    setSorting(false);
  };

  return (
    <div className="container">
      <div className="controls">
        <button onClick={generateNewArray} disabled={sorting}>
          Generate New Array
        </button>
        <label>Speed:
          <input type="range" min="1" max="100" value={speed} onChange={handleSpeedChange} disabled={sorting} />
        </label>
        <button onClick={startSorting} disabled={sorting}>
          Start Sorting
        </button>
      </div>
      <div className="array-container">
        {array.map((value, index) => (
          <div key={index} className="array-bar" style={{ height: `${value}%` }}>
                <div className="array-bar-label">
                  {value}
                </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortingVisualizer;
