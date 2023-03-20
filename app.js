"use strict";

// ============ LOAD & INIT APP ============ //
window.addEventListener("load", initApp);

function initApp() {
  // Harry Potter
  const potterName = "Harry Potter";
  const potterGender = "male";
  const potterHouse = "Gryffindor";
  const potterDateOfBirth = "31-07-1980";
  const potterAncestry = "half-blood";
  const potterEyeColour = "green";
  const potterHairColour = "black";
  const potterActor = "Daniel Radcliffe";
  const potterImage = "http://hp-api.herokuapp.com/images/harry.jpg";

  showCharacters(potterName, potterGender, potterHouse, potterDateOfBirth, potterAncestry, potterEyeColour, potterHairColour, potterActor, potterImage);
}

function showCharacters(nameP, genderP, houseP, dateOfBirthP, ancestryP, eyeColourP, hairColourP, actorP, imgP) {
  const articleElement = document.createElement("article");
  const imgElement = document.createElement("img");
  const nameElement = document.createElement("h2");
  const genderElement = document.createElement("p");
  const houseElement = document.createElement("p");
  const dateOfBirthElement = document.createElement("p");
  const ancestryElement = document.createElement("p");
  const eyeColorElement = document.createElement("p");
  const hairColorElement = document.createElement("p");
  const actorElement = document.createElement("p");

  imgElement.src = imgP;
  nameElement.textContent = nameP;
  genderElement.textContent = genderP;
  houseElement.textContent = houseP;
  dateOfBirthElement.textContent = dateOfBirthP;
  ancestryElement.textContent = ancestryP;
  eyeColorElement.textContent = eyeColourP;
  hairColorElement.textContent = hairColourP;
  actorElement.textContent = actorP;

  articleElement.append(imgElement, nameElement, genderElement, houseElement, dateOfBirthElement, ancestryElement, eyeColorElement, hairColorElement, actorElement);

  document.querySelector("#characters").appendChild(articleElement);
}
