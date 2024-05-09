
//Advanced Calculator Function
 
  function pow(x, n) {
    return Math.pow(x, n);
  }
  
  function modulo(a, b) {
    return a % b;
  }
  

 // Selection Sort Algorithm
function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        // Swap arr[i] and arr[minIndex]
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
    return arr;
  }
  
  // Insertion Sort Algorithm
  function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
      let current = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = current;
    }
    return arr;
  }
  
  
 
  module.exports = {
    
    pow,
    modulo,
    selectionSort,
    insertionSort,
  };
  