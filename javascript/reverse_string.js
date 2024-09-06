function reverseString(str) {
  // type your code here
  let reverse = "";
  for (const ch of str) {
    reverse = ch + reverse;
  }
  return reverse;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  console.log("");
  console.log("Expecting: ''");
  console.log("=>", reverseString(""));

  console.log("");
  console.log("Expecting: 'a'");
  console.log("=>", reverseString("a"));

  console.log("");
  console.log("Expecting: 'ba'");
  console.log("=>", reverseString("ab"));

  console.log("");
  console.log("Expecting: 'cba'");
  console.log("=>", reverseString("abc"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
