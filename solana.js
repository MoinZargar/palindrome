function palindrome(s) {
  let i = 0,
    j = s.length - 1;
  while (i <= j) {
    if (s[i] === s[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
}
var s = prompt("Enter a string");
var flag = palindrome(s);
if (flag == true) {
  console.log("string is palindrome");
} else {
  console.log("string is not palindrome");
}
