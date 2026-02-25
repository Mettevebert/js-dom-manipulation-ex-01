"use strict";

const websiteBody = document.body;

const headingOne = document.querySelector("h1");

websiteBody.style.background = "lightblue";

headingOne.style.fontSize = "3rem";
headingOne.style.color = "Maroon";

// opgave 2 
const paragraph = document.querySelector("p");
    paragraph.style.fontSize = "2rem";
    paragraph.style.fontWeight = "700";

    // opgave 3
// listeelementerne ved id
const listItemOne = document.querySelector("#list-item-one");
const listItemTwo = document.querySelector("#list-item-two");
const listItemThree = document.querySelector("#list-item-three");

// opgave 4 
// list-style-type på hvert element
listItemOne.style.listStyleType = "circle";
listItemTwo.style.listStyleType = "disc";
listItemThree.style.listStyleType = "square";

// opgave 5
const ulElement = document.querySelector("ul"); 
ulElement.style.fontSize = "22px";


// Refleksionsspørgsmål:
/* document.querySelector("#myId");   // ét bestemt element
document.querySelector(".myClass"); // første element med den class */