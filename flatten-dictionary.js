function flattenDictionary(obj) {
  let flat = {};

  function flattenDictionaryHelper(dictionary, propName) {
    if (typeof dictionary !== "object") {
      flat[propName] = dictionary;
      return;
    }

    for (let prop in dictionary) {
      if (propName === "") {
        flattenDictionaryHelper(dictionary[prop], propName + prop);
      } else {
        flattenDictionaryHelper(dictionary[prop], propName + "." + prop);
      }
    }
  }
  flattenDictionaryHelper(obj, "");
  return flat;
}

const obj = {
  Key1: "1",
  Key2: {
    a: "2",
    b: "3",
    c: {
      d: "3",
      e: "1",
    },
  },
};
const ans = flattenDictionary(obj);
console.log(ans);
