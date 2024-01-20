// ArrayVisualization.js

import React, { useState, useEffect } from 'react';
import './arrayvisualizer.css';

const ArrayVisualization = () => {
    const [array, setArray] = useState([]);
    const [operationDescription, setOperationDescription] = useState('');

    useEffect(() => {
      generateRandomArray();
    }, []);
  
    const generateRandomArray = () => {
      const newArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);
      setArray(newArray);
    };
  
    const handleInsertion = () => {
        const index = prompt('Enter the index to insert:');
        if (!isValidIndex(index)) return;
    
        const value = prompt('Enter the value to insert:');
        if (!isValidValue(value)) return;
    
        const newArray = [...array];
        newArray.splice(index, 0, parseInt(value, 10));
        setArray(newArray);
        setOperationDescription('Insertion adds a new element to the array at the specified index.');
      };
    
      const handleDeletion = () => {
        const index = prompt('Enter the index to delete:');
        if (!isValidIndex(index)) return;
    
        const newArray = array.filter((_, i) => i !== parseInt(index, 10));
        setArray(newArray);
        setOperationDescription('Deletion removes an element from the array at the specified index.');
      };
    
      const handleUpdate = () => {
        const index = prompt('Enter the index to update:');
        if (!isValidIndex(index)) return;
    
        const value = prompt('Enter the new value:');
        if (!isValidValue(value)) return;
    
        const newArray = [...array];
        newArray[index] = parseInt(value, 10);
        setArray(newArray);
        setOperationDescription('Update modifies the value of an existing element at the specified index.');
      };
  
    const isValidIndex = (index) => {
      if (isNaN(index) || !Number.isInteger(parseFloat(index)) || index < 0 || index >= array.length) {
        alert('Invalid index. Please enter a valid integer index.');
        return false;
      }
      return true;
    };
  
    const isValidValue = (value) => {
      if (isNaN(value) || !Number.isInteger(parseFloat(value))) {
        alert('Invalid value. Please enter a valid integer value.');
        return false;
      }
      return true;
    };

    const clearOperationDescription = () => {
        setOperationDescription('');
    };

  return (
    <div className="array-visualization">
        <p className='array-description'>
            An array is a linear data structure consisting of elements, each identified by an index or key.
            Memory allocation for an array is contiguous, meaning elements are stored in adjacent memory locations.
        </p>
        <div class="array-visualized">
            {array.map((value, index) => (
                <div>    
                    <div key={index} className="array-element">
                        <div className="value">{value}</div>
                    </div>
                    <div className="index">{index}</div>
                </div>
            ))}
        </div>
        <div className="operation-buttons" onMouseLeave={clearOperationDescription}>
        <div
          className="operation"
          onClick={handleInsertion}
          onMouseEnter={() => setOperationDescription('Insertion adds a new element to the array at the specified index.')}
        >
          Insert
        </div>
        <div
          className="operation"
          onClick={handleDeletion}
          onMouseEnter={() => setOperationDescription('Deletion removes an element from the array at the specified index.')}
        >
          Delete
        </div>
        <div
          className="operation"
          onClick={handleUpdate}
          onMouseEnter={() => setOperationDescription('Update modifies the value of an existing element at the specified index.')}
        >
          Update
        </div>
      </div>
      {operationDescription && (
        <div className="operation-description">{operationDescription}</div>
      )}
    </div>
  );
};

export default ArrayVisualization;
