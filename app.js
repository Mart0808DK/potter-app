"use strict";

// ============ LOAD & INIT APP ============ //
window.addEventListener("load", initApp);

const potterSection = document.querySelector("#characters");

function initApp() {
  // Harry Potter
  const harry = {
    name: "Harry Potter",
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "31-07-1980",
    yearOfBirth: 1980,
    ancestry: "half-blood",
    eyeColour: "green",
    hairColour: "black",
    wand: "holly,phoenix feather,11",
    patronus: "stag",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Daniel Radcliffe",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/harry.jpg",
  };

  // Hermione Granger
  const hermione = {
    name: "Hermione Granger",
    species: "human",
    gender: "female",
    house: "Gryffindor",
    dateOfBirth: "19-09-1979",
    yearOfBirth: 1979,
    ancestry: "muggleborn",
    eyeColour: "brown",
    hairColour: "brown",
    wand: "vine,dragon heartstring",
    patronus: "otter",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Emma Watson",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
  };

  // Ron Weasley
  const ron = {
    name: "Ron Weasley",
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "01-03-1980",
    yearOfBirth: 1980,
    ancestry: "pure-blood",
    eyeColour: "blue",
    hairColour: "red",
    wand: "willow,unicorn tail-hair,14",
    patronus: "Jack Russell terrier",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Rupert Grint",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/ron.jpg",
  };

  const draco = {
    name: "Draco Malfoy",
    species: "human",
    gender: "male",
    house: "Slytherin",
    dateOfBirth: "05-06-1980",
    yearOfBirth: 1980,
    ancestry: "pure-blood",
    eyeColour: "grey",
    hairColour: "blonde",
    wand: "hawthorn,unicorn tail-hair,10",
    patronus: "",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Tom Felton",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/draco.jpg",
  };

  const severus = {
    name: "Severus Snape",
    species: "human",
    gender: "male",
    house: "Slytherin",
    dateOfBirth: "09-01-1960",
    yearOfBirth: 1960,
    ancestry: "half-blood",
    eyeColour: "black",
    hairColour: "black",
    wand: "",
    patronus: "doe",
    hogwartsStudent: false,
    hogwartsStaff: true,
    actor: "Alan Rickman",
    alive: false,
    image: "http://hp-api.herokuapp.com/images/snape.jpg",
  };

 showCharacters(harry);
 showCharacters(ron);
 showCharacters(hermione);
 showCharacters(draco);
 showCharacters(severus);


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
