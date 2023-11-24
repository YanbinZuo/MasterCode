const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  for(let i=1; i<array.length; i++) {
    let j = i;
    while(array[j] < array[j-1]) {
        let temp = array[j];
        array[j] = array[j-1];
        array[j-1] = temp;
        j--;
    }
  }
}

insertionSort(numbers);
console.log(numbers);