"use strict";

const userName = prompt("Please enter your name")?.toLocaleLowerCase().trim();
const gender = prompt("What is your Gender?")?.toLocaleLowerCase().trim();
const age = +prompt("How old are you ?");
let welcomingMessage = "";
let title = "";
let displayWelcomeMessage;

if (age <= 0) alert("Age cannot be less than or equal to zero");

// If user did not enter a name, No need for the welcoming message
if (userName) {
  displayWelcomeMessage = confirm(
    "Would you like to display the welcome message?"
  );
}
// switch (gender) {
//   case "male":
//     title = "Mr";
//     break;
//   case "m":
//     title = "Mr";
//     break;
//   case "female":
//     title = "Ms";
//     break;
//   case "f":
//     title = "Ms";
//     break;
// }
if (gender === "male" || gender === "m") title = "Mr";
if (gender === "female" || gender === "f") title = "Ms";

if (displayWelcomeMessage) {
  welcomingMessage = `Good Day ${title ? title : ""} ${userName}`;
  alert(welcomingMessage);
} else {
}
