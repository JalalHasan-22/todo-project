"use strict";

// const userName = prompt("Please enter your name")?.toLocaleLowerCase().trim();
// const gender = prompt("What is your Gender?")?.toLocaleLowerCase().trim();
// const age = +prompt("How old are you ?");
// let welcomingMessage = "";
// let title = "";
// let displayWelcomeMessage;

let answersArr = [];

const firstQuestion = function () {
  let answer = prompt(
    "1) Are you commited to finish all of your tasks ? Yes / No"
  )
    ?.toLocaleUpperCase()
    .charAt(0);
  return answer;
};

const secondQuestion = function () {
  let answer = prompt(
    "2) is it essential to finish all your tasks every day ? Yes / No"
  )
    ?.toLocaleUpperCase()
    .charAt(0);
  return answer;
};

const thirdQuestion = () => {
  let answer = prompt("3) Are you an organized person ? Yes / No")
    ?.toLocaleUpperCase()
    .charAt(0);
  return answer;
};

const answerValidation = function (answer) {
  if (answer === "Y") answer = "Yes";
  else if (answer === "N") answer = "No";
  else answer = "Invalid";

  answersArr.push(answer);
};

answerValidation(firstQuestion());
answerValidation(secondQuestion());
answerValidation(thirdQuestion());

const printAnswers = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

printAnswers(answersArr);
// if (age <= 0) alert("Age cannot be less than or equal to zero");

// // If user did not enter a name, No need for the welcoming message
// if (userName) {
//   displayWelcomeMessage = confirm(
//     "Would you like to display the welcome message?"
//   );
// }

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

// if (gender === "male" || gender === "m") title = "Mr";
// if (gender === "female" || gender === "f") title = "Ms";

// if (displayWelcomeMessage) {
//   welcomingMessage = `Good Day ${title ? title : ""} ${userName}`;
//   alert(welcomingMessage);
// } else {
// }
