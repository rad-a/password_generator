// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//DOM element variables
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");
var resetBtn = document.querySelector("#reset");
var generatedPw = document.querySelector("#password");

//Password option variables
var specialCharacters = "!@#$%&*+?^";
var numbers = "1234567890";
var uppercase = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var length = "";
var chosenCharacterTypes = [];

//1. When user clicks #generate, prompt for desired password length
//Get desired password length
function generatePassword() {
  event.preventDefault();
  let passwordLength = parseInt(
    prompt(
      "How many characters will your password have? Choose between 8 and 128."
    )
  );

  console.log("Password length: " + passwordLength); //console.log desired password length

  //If entered input is not valid, display prompt again
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(
      prompt("Please choose a number between 8 and 128.")
    );
    console.log("Password length (attempt 2+): " + passwordLength);
  }
  //Prompt options for password character types
  let confirmUpper = confirm("Would you like to include uppercase characters?");
  let confirmLower = confirm("What about lowercase characters?");
  let confirmNum = confirm("And numeric characters?")
  let confirmSpecialChar = confirm("Lastly, want to include special characters?");

  //Store chosen password types
  if (confirmUpper) {
    chosenCharacterTypes.push(uppercase);
    console.log("Uppercase: Yes");
  } else {
    console.log("Uppercase: No");
  }

  if (confirmLower) {
    chosenCharacterTypes.push(lowercase);
    console.log("Lowercase: Yes");
  } else {
    console.log("Lowercase: No");
  }

  if (confirmNum) {
    chosenCharacterTypes.push(numbers);
    console.log("Numbers: Yes");
  } else {
    console.log("Numbers: No");
  }

  if (confirmSpecialChar) {
    chosenCharacterTypes.push(specialCharacters);
    console.log("Special characters: Yes");
  } else {
    console.log("Special characters: No");
  }

  //Container for generated password string
  let newPassword = "";

  //Compose password by randomly assigning values from combination of selected character types
  for (let i = 0; i < passwordLength; i++) {
    var selectedCharacterIndex = Math.floor(
      Math.random() * chosenCharacterTypes.length
    );

    var characterString = chosenCharacterTypes[selectedCharacterIndex];

    if (typeof characterString === "undefined") {
      console.log("No character type selected.");
      wrongCriteriaEntered();

    } else {
      newPassword +=
        characterString[Math.floor(Math.random() * characterString.length)];

      console.log(newPassword);
    }

    function wrongCriteriaEntered() {
      document.getElementById("password").innerHTML =
        "Oops...looks like you did not select any character type. Please try again and choose at least one.";
        return wrongCriteriaEntered();
    }
  }

  return newPassword;
}

//Reset form values with "Reset" button
function resetForm() {
  document.getElementById("reset");
}

//Copy generated password to clipboard
copyBtn.addEventListener("click", function copyPw() {
  event.preventDefault();
  document.getElementById("password").select();
  document.execCommand("copy");
});

//2. Prompt user to select/decline lowercase letters

//3. Prompt user to select/decline special characters

//Validate that at least one character type is selected
//If at lease one type is chosen, proceed to generate password

//Else, prompt user to select at least one character type

//When all conditions are met, generate password

//Display password on the page

//User can copy generated password to clipboard by clicking a button

//User can clear/reset selections at any point by clicking a button
