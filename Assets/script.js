// Get references to the #generate element
// Array of special characters
var specialCharacters = [
  '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
  '-', '_', '+', '=', '[', ']', '{', '}', '|', '\\',
  ';', ':', '\'', '"', ',', '.', '<', '>', '/', '?',
  '`', '~'
]

// Array of all numbers

var numericCharacters = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9"
]

// Array of lower case characters
var lowerCaseCharacters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

// Array of Upper Case Characters
var upperCaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
]

function getPasswordOptions () {
  var length = parseInt(prompt("How many characters would you like your password to contain?"), 10);
  
  if(Number.isNaN(length)){
    alert("Password length must be provided as a number")
  }

  if(length < 8) {
    alert("Password must be at least 8 characters")
    return null
  }

  if(length > 128){
    alert("Password length must be less than 128 characters")
  }
  
}

function getRandom(arr) {

  return randElement;
}

// Function to generate password
function generatePassword () {
  var options = getPasswordOptions();
}

// Assignment code here
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
