class HashTable {
  constructor(size) {
    this.size = size;
    this.keys = this.initArray(size);
    this.values = this.initArray(size);
    this.limit = 0;
  }
  initArray(size) {
    return Array.from({ length: size }).fill(null);
  }
  hash(key) {
    if (!Number.isInteger(key)) throw "Key must be integer";
    return this.secondHash(key % this.size);
  }
  secondHash(hashedKey) {
    let R = this.size - 2;
    return R - (hashedKey % R);
  }
  put(key, values) {
    let hashedIndex = this.hash(key);
    while (this.keys[hashedIndex] !== null) {
      hashedIndex++;
      hashedIndex = hashedIndex % this.size;
    }
    this.keys[hashedIndex] = key;
    this.values[hashedIndex] = values;
    this.limit++;
  }
  get(key) {
    let hashedIndex = this.hash(key);
    while (this.keys[hashedIndex] !== key) {
      hashedIndex++;
      hashedIndex = hashedIndex % this.size;
    }
    return this.values[hashedIndex];
  }
}

var exampletable = new HashTable(13);
exampletable.put(7, "hi");
exampletable.put(20, "hello");
exampletable.put(33, "sunny");
exampletable.put(46, "weather");
exampletable.put(59, "wow");
exampletable.put(72, "forty");
exampletable.put(85, "happy");
exampletable.put(98, "sad");

console.log(exampletable.get(20));
