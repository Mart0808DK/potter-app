"use strict";

// ============ LOAD & INIT APP ============ //
window.addEventListener("load", initApp);

const potterSection = document.querySelector("#characters");

async function initApp() {
  // Harry Potter
  const harry = await getCharacter("https://raw.githubusercontent.com/cederdorff/dat-js/main/data/harry.json"); 
  showCharacters(harry);
  const draco = await getCharacter("https://raw.githubusercontent.com/cederdorff/dat-js/main/data/draco.json");
  showCharacters(draco);
  const ron = await getCharacter("https://raw.githubusercontent.com/cederdorff/dat-js/main/data/ron.json");
  showCharacters(ron);
  const hermione = await getCharacter("https://raw.githubusercontent.com/cederdorff/dat-js/main/data/hermione.json");
  showCharacters(hermione);
  const snape = await getCharacter("https://raw.githubusercontent.com/cederdorff/dat-js/main/data/severus.json");
  showCharacters(snape);
 

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

async function getCharacter(url) {
const response = await fetch(url)

const data = await response.json()
return data;

}

function showCharacters(character){
  console.log(character);

 const Myhtml = /*html*/`
    <article>
    <img src=${character.image}>
    <h2>${character.name}</h2>
    <p>House of: ${character.house}</p>
    </article>

  `
  document.querySelector("#characters").insertAdjacentHTML("beforeend",Myhtml);
  document.querySelector("#characters article:last-child").addEventListener("click", characterClicked);

  function characterClicked() {
    console.log("character clicked");
    showCh(character);

    
  }

}

function showCh(character) {
  // change element in dialog
  document.querySelector("#dialog-firstName").textContent = character.name;
  document.querySelector("#dialog-house").textContent = character.house;
  document.querySelector("#dialog-dateOfBirth").textContent = character.dateOfBirth;


  document.querySelector("#dialog-img").src = character.image;

  // show dialog
  document.querySelector("#dialog-characters").showModal();
}
