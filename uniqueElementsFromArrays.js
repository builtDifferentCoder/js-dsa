function uniqueElements(arr1, arr2) {
  let arr = arr1.concat(arr2);
  const set = new Set(arr);
  return Array.from(set);
}

let arr1 = [1, 2, 3, 4];
let arr2 = [4, 5, 6, 7];
console.log(uniqueElements(arr1, arr2));
