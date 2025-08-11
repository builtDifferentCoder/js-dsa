const Stack = require("./stack");
function validParenthesis(str) {
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === "(") {
      stack.insertion(char);
    } else if (char === ")") {
      if (stack.isEmpty()) return false;
      stack.deletion();
    }
  }
  return stack.isEmpty();
}

console.log(validParenthesis("(())"));
console.log(validParenthesis("())"));
