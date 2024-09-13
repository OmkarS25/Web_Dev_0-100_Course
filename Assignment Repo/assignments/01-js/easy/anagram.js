/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // First, we need to convert both strings to lowercase
  // Then split them into individual characters
  // Sort the characters
  // Join them back together to form a string
  // Finally, compare the two strings
  str1 = str1.toLowerCase().split('').sort().join('');
  str2 = str2.toLowerCase().split('').sort().join('');
  return str1 === str2;
}

module.exports = isAnagram;
