class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      let character = word.charAt(i);
      let node = curr.children[character];
      if (!node) {
        node = new TrieNode();
        curr.children[character] = node;
      }
      curr = node;
    }
    curr.endOfWord = true;
  }
  search(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      let character = word.charAt(i);
      let node = curr.children[character];
      if (!node) {
        return false;
      }
      curr = node;
    }
    return curr.endOfWord;
  }
  remove(word) {
    return this.recursivelyRemove(this.root, word, 0);
  }
  recursivelyRemove(curr, word, i) {
    if (i === word.length) {
      if (!curr.endOfWord) {
        return false;
      }
      curr.endOfWord = false;
      return Object.keys(curr.children) === 0;
    }
    var character = word.charAt(i);
    let node = curr.children[character];
    if (!node) {
      return false;
    }
    var shouldDeleteNode = this.recursivelyRemove(node, word, i + 1);
    if (shouldDeleteNode) {
      delete curr.children[character];
      return Object.keys(curr.children).length === 0;
    }
    return false;
  }
}

var trie1 = new Trie();
trie1.insert("sammie");
trie1.insert("simran");
console.log(trie1.search("simran"));
console.log(trie1.remove("sammie"));
console.log(trie1.remove("simran"));
console.log(trie1.search("sammie"));
console.log(trie1.search("simran"));
