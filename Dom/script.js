// 1st method to select element Qauerry Selector
// console.log(document.querySelector("#heading"))

// 2rd method to select element Get element by ID
// console.log(document.getElementById("heading"))

// 3rd method to select element Get element by ID
// console.log(document.getElementsByTagName("h1"))


// how to change the content in HTML 
// .inner HTML = ""

document.querySelector("#heading").innerHTML += "ASAP FRONTEND";

// how to change the CSS Style 
// .style 
document.querySelector("h1").style.background = "red"

function changeColor (){
 // console.log("change the color in to green")
document.querySelector("button").style.background="green"
}


function toggleListSideBar (){
document.querySelector("body").classList.toggle("open")    
}