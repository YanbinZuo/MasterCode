function mergeSortedArrays(arr1, arr2) {
    let i = 0, j = 0;
    const merged = [];
    while(i<arr1.length && j< arr2.length) {
        if(arr1[i] < arr2[j]) {
            merged.push(arr1[i])
            i++;
        } else {
            merged.push(arr2[j])
            j++;
        }
    }
    if(i=== arr1.length) {
        merged.push(...arr2.slice(j))
    } else if( j === arr2.length) {
        merged.push(...arr1.slice(i));
    }
    return merged;
}

const mergeSortedArraysV2 = (arr1, arr2) => [...arr1, ...arr2].sort((a,b) => a - b)

console.log(mergeSortedArrays([0,3,4,69], [0,3,4,6,30]));
console.log(mergeSortedArraysV2([0,3,4,69], [0,3,4,6,30]));