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

// Defines the possible parameters for the password generation using prompt and alert functions to define the lenght and mix of characters to be included in the password.

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

//  Ensures that at least one of the four options of characters are chosen so that a password can be generated

  if(hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasUpperCaseCharacters === false &&
    hasLowerCaseCharacters === false) {
      alert("Must select at least one character type");
      return null
    }

// Creates an object which stores the parameters for the password determined above (length and characters)

    passwordOptions = {
      length: length,
      hasSpecialCharacters: hasSpecialCharacters,
      hasLowerCaseCharacters: hasLowerCaseCharacters,
      hasNumericCharacters: hasNumericCharacters,
      hasUpperCaseCharacters: hasUpperCaseCharacters
    }

    return passwordOptions;

}

// The below function generates a random 

function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}

// Function to generate password
function generatePassword () {
  var options = getPasswordOptions();
  var results = []

  var possibleCharacters = []

  var guaranteedCharacters = [];

  // The below conditionals check whether the user selected any of the four options from the above function (whether to include each type of character), then for each of the options, it will combine (ie concat) the the respective arrays 

  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if (options.hasLowerCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCaseCharacters);
    guaranteedCharacters.push(getRandom(lowerCaseCharacters));
  }

  if (options.hasUpperCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCaseCharacters);
    guaranteedCharacters.push(getRandom(upperCaseCharacters));
  }

  // For loop which uses the length from the "length" key in the password options object, adding by one each time
  // The function of the loop then sets a new variable that pulls a random element from the "possibleCharacters" array 
  // The function then adds the random characters to the results array defined above bet not yet filled

  for (var index = 0; index < options.length; index++) {
    var randomCharacter = getRandom(possibleCharacters);
    results.push(randomCharacter);
  }

  // For loop which runs the length of the guaranteedCharacters array, and takes the characters that are guaranteed to be part of the password and places them in the correct positions within the final 'results' array

  for (var index = 0; index < guaranteedCharacters.length; index++) {
    results[index] = guaranteedCharacters[index];
  }

//  Calls the function to return all elements of the final 'results' array and creates a string from it, which is returned as the password

  return results.join("");
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

