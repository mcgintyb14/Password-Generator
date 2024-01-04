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
  
  var hasSpecialCharacters = confirm(
    "Click OK to confirm including special characters"
  )

  var hasNumericCharacters = confirm(
    "Click OK to confirm including numbers"
  )

  var hasLowerCaseCharacters = confirm(
    "Click OK to confirm including lower cased characters"
  )

  var hasUpperCaseCharacters = confirm(
    "Click OK to confirm including upper cased characters"
  )

  if(hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasUpperCaseCharacters === false &&
    hasLowerCaseCharacters === false) {
      alert("Must select at least one character type");
      return null
    }

    passwordOptions = {
      length: length,
      hasSpecialCharacters: hasSpecialCharacters,
      hasLowerCaseCharacters: hasLowerCaseCharacters,
      hasNumericCharacters: hasNumericCharacters,
      hasUpperCaseCharacters: hasUpperCaseCharacters
    }

    return passwordOptions;

}

function getRandom(arr) {
  var randomIndex = Math.floor(Math.random()* arr.length);
  var randomElement = arr(randomIndex);
  return randElement;
}

// Function to generate password
function generatePassword () {
  var options = getPasswordOptions();
  var results = []

  var possibleCharacters = []

  var guaranteedCharacters = [];

  if(options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters)
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if(options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters)
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if(options.lowerCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCaseCharacters)
    guaranteedCharacters.push(getRandom(lowerCaseCharacters));
  }

  if(options.upperCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCaseCharacters)
    guaranteedCharacters.push(getRandom(upperCaseCharacters));
  }

  for(var index =0; index < options.length; index++){
    var possibleCharacters = getRandom(possibleCharacters);

    results.push(possibleCharacters);
  }

  for(var index =0; index < guaranteedCharacters.length; index++){
    results[index] = guaranteedCharacters[index];
  }

  return results.join("")
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
