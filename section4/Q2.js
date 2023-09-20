// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false

const array1 = ['a', 'y', 'c', 'x'];
const array2 = ['z', 'y', 'i'];

const containCommonItems = (arr1, arr2) => {
    let map = {}
    for(let i=0; i<arr1.length; i++) {
        if(!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true;
        }
    }

    for(let j=0; j<arr2.length; j++) {
        if(map[arr2[j]]) return true;
    }

    return false;
}

const containCommonItemsV2 = (arr1, arr2) => {
    return arr1.some(item => arr2.includes(item));
}

console.log(containCommonItems(array1, array2))
console.log(containCommonItemsV2(array1, array2))