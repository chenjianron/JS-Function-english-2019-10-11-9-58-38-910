function alphabetSort(message) {
  // wirte your code here
  return message.split("").sort().join("");
}
console.log(alphabetSort("hello")); // should return 'ehllo'
