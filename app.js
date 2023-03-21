"use strict";

// ============ LOAD & INIT APP ============ //
window.addEventListener("load", initApp);

const potterSection = document.querySelector("#characters");

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
  // Ron Weasley
  const weasleyName = 'Ron Weasley';
  const weasleyGender = 'male';
  const weasleyHouse = 'Gryffindor';
  const weasleyDateOfBirth = "01-03-1980";
  const weasleyAncestry = 'pure-blood';
  const weasleyEyeColour = 'blue';
  const weasleyHairColour = 'red';
  const weasleyActor = 'Rupert Grint';
  const weasleyImage = "http://hp-api.herokuapp.com/images/ron.jpg";


  showCharacters(weasleyName, weasleyGender, weasleyHouse, weasleyDateOfBirth, weasleyAncestry, weasleyEyeColour, weasleyHairColour, weasleyActor, weasleyImage);

  showCharacters(potterName, potterGender, potterHouse, potterDateOfBirth, potterAncestry, potterEyeColour, potterHairColour, potterActor, potterImage);
}

// function showCharacters(nameP, genderP, houseP, dateOfBirthP, ancestryP, eyeColourP, hairColourP, actorP, imgP) {
//   const articleElement = document.createElement("article");
//   const imgElement = document.createElement("img");
//   const nameElement = document.createElement("h2");
//   const genderElement = document.createElement("p");
//   const houseElement = document.createElement("p");
//   const dateOfBirthElement = document.createElement("p");
//   const ancestryElement = document.createElement("p");
//   const eyeColorElement = document.createElement("p");
//   const hairColorElement = document.createElement("p");
//   const actorElement = document.createElement("p");

//   imgElement.src = imgP;
//   nameElement.textContent = nameP;
//   genderElement.textContent = genderP;
//   houseElement.textContent = houseP;
//   dateOfBirthElement.textContent = dateOfBirthP;
//   ancestryElement.textContent = ancestryP;
//   eyeColorElement.textContent = eyeColourP;
//   hairColorElement.textContent = hairColourP;
//   actorElement.textContent = actorP;

//   articleElement.append(imgElement, nameElement, genderElement, houseElement, dateOfBirthElement, ancestryElement, eyeColorElement, hairColorElement, actorElement);

//   document.querySelector("#characters").appendChild(articleElement);
// }

function showCharacters(nameP, genderP, houseP, dateOfBirthP, ancestryP, eyeColourP, hairColourP, actorP, imgP){

 const Myhtml = /*html*/`
    <article>
    <img src=${imgP}>
    <h2>${nameP}</h2>
    <p>${genderP}</p>
    <p>${houseP}</p>
    <p>${dateOfBirthP}</p>
    <p>${ancestryP}</p>
    <p>${eyeColourP}</p>
    <p>${hairColourP}</p>
    <p>${actorP}</p>
    </article>

  `
  document.querySelector("#characters").insertAdjacentHTML("beforeend",Myhtml);


  
}
