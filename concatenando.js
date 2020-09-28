const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// const arr3 = arr1.concat(0, arr2, [7, 8, 9]); // 1, 2, 3, 4, 0, 4, 5, 6, 7, 8, 9

// ...rest/...spread
const arr3 = [0, ...arr1, ...arr2, 7, 8, 9]
console.log(arr3); // resultado esperado!
