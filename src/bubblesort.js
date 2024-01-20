// BubbleSort.js

const bubbleSort = async (arr, swap) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] < arr[j + 1]) {
          await swap(arr, j, j + 1);
        }
      }
    }
  };
  
  export default bubbleSort;
  