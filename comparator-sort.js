// var mythical = ["dragon", "slayer", "magic", "wizard of oz", "ned tark"];

// let ans = mythical.sort((a, b) => a.length - b.length);

var mythical = [
  { prop1: "", prop2: "" },
  { prop1: "", prop2: "", prop3: "" },
  { prop1: "", prop2: "" },
];
let ans = mythical.sort(
  (a, b) => Object.keys(a).length - Object.keys(b).length
);
console.log(ans);
