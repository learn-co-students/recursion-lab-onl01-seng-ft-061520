// Code your solution here!
function printString(str) {
  console.log(str[0]);
  if (str.length == 1) return true;
  printString(str.substring(1, str.length));
}

function reverseString(str) {
  if (str.length == 1) return str[0];
  return str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
}

function isPalindrome(str) {
	if (str.length <= 1) return true;
	return str[0] == str[str.length - 1] && isPalindrome(str.slice(1, str.length - 1));
}

function addUpTo(arr, index) {
	if (index == 0) return arr[0];
	return arr[0] + addUpTo(arr.slice(1, arr.length), index - 1)
}

function maxOf(arr) {
	if (arr.length == 1) return arr[0];
	return arr[0] > arr[arr.length - 1] ? maxOf(arr.slice(0, arr.length - 1)) : maxOf(arr.slice(1, arr.length));
}

function includesNumber(arr, val) {
	if (arr.length == 0) return false
	return arr[0] == val || includesNumber(arr.slice(1, arr.length), val);
}

//console.log(includesNumber([1, 2, 3], 1));
