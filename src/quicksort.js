// App.js



  const partition = async (arr, low, high,swap) => {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
      // Change the condition to sort in descending order
      if (arr[j] >= pivot) {
        i++;
        await swap(arr, i, j);
      }
    }

    await swap(arr, i + 1, high);
    return i + 1;
  };

  const quickSortAlgo = async (arr, low, high,swap) => {
    if (low < high) {
      const pi = await partition(arr, low, high,swap);

      await Promise.all([
        quickSortAlgo(arr, low, pi - 1,swap),
        quickSortAlgo(arr, pi + 1, high,swap)
      ]);
    }
  };

  const quickSort = async (arr, swap) => {
    await quickSortAlgo(arr, 0, arr.length - 1, swap);
  };


export default quickSort;
