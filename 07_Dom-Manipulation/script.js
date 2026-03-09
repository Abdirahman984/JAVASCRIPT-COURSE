 /*// SELECTING ELEMENT BY ID
const Paragraph = document.getElementById("para")
console.log(Paragraph)

// SELECTING ELEMENT BY CLASS NAME
const paraa = document.getElementById("parag")
console.log(paraa)

// SELECTING ELEMENT BY QUARRYALL 
const all = document.querySelectorAll("p")
console.log(all);

// SELECTING ELEMENT BY QUARRY
const quarry = document.querySelector("p")
console.log(quarry)

// SELECTING ELEMENT BY PARENT ELEMENT
const title = document.getElementsByClassName("title")
console.log(title.fisrtElemntChild)

// Manipulating HTML elements

// 1. create element 
let div = document.createElement("div");
console.log(div);
div.innerHTML= "welcome to the my academy"
document.body.appendChild(div);

// AppendChild 
let menu = document.getElementById("menu");
let list = document.createElement("li")
list.innerHTML= "CONTACT"
menu.appendChild(list);


// Traversing elements 
//Selecting parent element 

const child= document.querySelector("p")
console.log(child.parentElement)

console.log(child.children)
document.body.appendChild(child)

// DOM ATTRIBUTES 
let inputBox = document.getElementById("inputbox")
// get atttibutes
console.log(inputBox.attributes)

// set attrbutes 
console.log(inputBox.setAttribute("class", "user"))
console.log(inputBox)

// has attributes
console.log(inputBox.hasAttribute ("id"))

// remove attributes
console.log(inputBox.removeAttribute("placeholder"))
console.log(inputBox)

// css style
console.log(inputBox.style.color)

// css text 
inputBox.style.cssText += "width:200px", "height:200px";
console.log(inputBox.style.height)
console.log(inputBox);

// className
//let titles = document.getElementById("title")
//titles.className += " myclass new "
//console.log(titles.className)

// classList

let titles = document.getElementById("title")
titles.classList.replace("main", "maano")
console.log(titles) */

// DOM EVENTS

let btnbtn = document.getElementById("btn")
btnbtn.addEventListener ("click", function(){
    btnbtn.style.backgroundColor= "red"
})

