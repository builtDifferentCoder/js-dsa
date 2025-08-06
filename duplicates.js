function duplicates(arr) {
  let set = new Set(arr);
  return set.size < arr.length;
}

console.log(duplicates([1, 2, 3]));
