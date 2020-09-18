
//Function is very similar to def in Python
//but Js is way more forgiving
//js is not strict on type, or defining variables
//js will always do it's best to serve you. It wont just poop out like python lol
function main () {
  pingConsole("works");
  setUpSkillsField();
  equipReRollButton();
}

function pingConsole(aString) {
  console.log(aString);
}

//Normally you would not generate a static or non changing section every time the page is loaded
//however I wanted to give an example of how it could be dynamically loaded
//and furthermore skills could be adjusted here and see the html page update to reflect.
//also I just didnt want to write a htmkl element for each one of these lol. But usually
//I would copy the html generated and remove this block after generating.
function setUpSkillsField() {
  const skillArray = ["Weapon Skill", "Ballistic Skill", "Strength", "Toughness", "Agility", "Intelligence", "Perception", "Willpower", "Fellowship"];
  const skillsField = $("#skillsField")[0];
  //this is a js loop. e is a variable i am initiating each iteration
  //pointing to the array value that is being currently being processed
  for (e of skillArray) {
    const skillContainer = document.createElement("div");
    const containerLabel = document.createTextNode(e);
    const reRollButton = document.createElement("button");
    reRollButton.classList.add("reRollButton"); //I'm adding classes for styling
    const buttonValue = getRandomInt(30);
    reRollButton.innerHTML = buttonValue;

    skillContainer.appendChild(containerLabel);
    skillContainer.appendChild(reRollButton);
    skillsField.appendChild(skillContainer);

    skillContainer.classList.add("skillContainer");
  }
}

function equipReRollButton() {
  const reRollButtons = $(".reRollButton");
  for (e of reRollButtons) {
    e.addEventListener("click", function() {
      console.log(this.innerHTML);
    });
  }
}


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function $(aString) {
  return document.querySelectorAll(aString);
}

//This line waits until the page has loaded
//the code has been read by the client
//then calls the main variable
//which was defined as a function block of code
window.onload = main;
