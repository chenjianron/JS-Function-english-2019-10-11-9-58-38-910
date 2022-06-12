function palindrome(message) {
  // wirte your code here
  var len = message.length;
  for (var i = 0; i < len / 2; ++i) {
    if (message.charAt(i) != message.charAt(len - 1 - i)) {
      return false;
    }
  }
  return true;
}
console.log(palindrome("hello")); // should return false
console.log(palindrome("abcba")); // should return true
