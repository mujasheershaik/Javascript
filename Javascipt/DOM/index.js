// DOM 

// Document Object Model 

// It will attach the document in the form of a tree structure 

// HTML 
// Head (Meta Tag's), Body header(nav) section(h, ...) footer() (content) 

// Reading dom properties 

// selecting dom element 

// getElementById() // single element with that id

// getElementByClassName // in the form of an array []

// getElementByTagName 

// querySelector 

// querySelectorAll 

console.log(document)
let h1 = document.getElementById("heading")
let h4 = document.getElementById("text")
console.log(h1)
console.log(h4)
let c = document.getElementsByClassName("h1")
console.log(c)

let E = document.getElementsByTagName("h1")
console.log(E)

// DOM Traversing 

// ParentElement 

// Children 

// firstElementChild 

// lastElementChild 

let q=document.querySelector('h1')
console.log(q)

let name = document.getElementById("name")
console.log(name)

let parentElement = name.parentElement
console.log(parentElement)
console.log(parentElement.children)
console.log(parentElement.firstElementChild)
console.log(parentElement.lastElementChild)

// Creating a DOM element 

let newElement = document.createElement("h1")
newElement.innerText = "new Element created"
console.log(newElement)
parentElement.append(newElement)


let newElemt = document.createElement("h1")
newElement.innerText = "9876543210"
console.log(newElement)
parentElement.prepend(newElement)


let btn =document.getElementById("btn")

console.log(btn)

// btn.onclick = function (){
//     alert("Button Clicked")
//     console.log("Button Clicked")
// }

// addEventListener
function hi(){
    // alert("Button Clicked")
    btn.innerText = "Button Clicked"
}
btn.addEventListener("Click", hi)


// synchronous 

// Event Bubbling - travels from child element to parent element
// Capturing - travels from parent to child element
// Deligation event will be added to the parent element and the event will be used by all the child elements

let child = document.getElementById("innertext")
function action(){
    console.log("inner h1 clicked")
}
child.addEventListener("Click",action)

let parent = document.getElementById("outertext")
function action1(){
    console.log("outer text")
}
child.addEventListener("Click",action1)

