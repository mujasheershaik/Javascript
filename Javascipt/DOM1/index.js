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
btn.addEventListener("click", hi)


// synchronous 

// Event Bubbling - travels from child element to parent element
// Capturing - travels from parent to child element
// Deligation event will be added to the parent element and the event will be used by all the child elements

// Event Bubbling 

let child = document.getElementById("innertext")
function action(){
    console.log("inner h1 clicked")
}
child.addEventListener("click",action)

let parent = document.getElementById("outertext")
function action1(){
    console.log("outer text")
}
parent.addEventListener("click",action1)

let div = document.getElementById("div")
function action2(){
    console.log("parent clicked")
}
div.addEventListener("click",action2)

let div1 = document.getElementById("div1")
function action3(){
    console.log("Top Parent Clicked")
}
div1.addEventListener("click",action3)

// Event Capturing 

let child1 = document.getElementById("innertext1")
function action4(){
    console.log("inner text1 clicked")
}
child1.addEventListener("click",action4,true)

let parent1 = document.getElementById("outertext1")
function action5(){
    console.log("outer text 1 clicked")
}
parent1.addEventListener("click",action5,true)

let div2= document.getElementById("div2")
function action6(){
    console.log("Top parent 1 clicked")
}
div2.addEventListener("click",action6, true)

let div3 = document.getElementById("div3")
function action7(){
    console.log("Parent 1 clicked")
}
div3.addEventListener("click",action7, true)

// Event Deligation 

let list = document.getElementById("list")
function listclick(){
    console.log("Clicked")
}
list.addEventListener("click", function(e){
    console.log(e.target)
})

let fruits = document.getElementById("fruits")
function Fruits(){
    console.log("Fruits Listed")
}
fruits.addEventListener("click", function(e){
    console.log(e.target)
})

// window.onscroll 
console.log(window)

// Normal Event 

// Throttling 

// Debouncing 

// Normal Event 

let button = document.getElementById("button")

let a = 0
let b = 0
let d = 0

button.addEventListener("click",function(){
    a+=1
    console.log("Value of a is:",a)
    console.log("Button clicked")
})

// Throttling 

let lastclick=0

button.addEventListener("click",function(){
    let current=Date.now()
    if (current-lastclick >2000){
        b+=1;
        console.log("Value of B is:",b);
        lastclick= current;
    }
    console.log("Button clicked")
})

// 0
// 1
// 2
// 3
// 4 event 0 1 2 3 4 5 0 1 2 3 4 5 6 event
// 5
// event

// Debouncing 

let t
button.addEventListener("click",function(){
    clearTimeout(t)
    t=setTimeout(function(){
        d+=1
        console.log("Value of c is:",d)
    },2000)
})

// call back function 

function function1(s){
    console.log(s)
}

function one(a,b,c){
    console.log("one is executed")
    c(a+b)
}
one(1,2,function1)

// Promise 

// Promise(()=>{

// })

let p = new Promise((resolve,reject)=>{
    let status = false
    if(status){
        // console.log("Resolved")
        resolve("function successful")
    }
    else{
        // console.log("Reject")
        reject("error")
    }
})

// p
// .then // success case resole
// 
// .catch // failure // reject

p
.then((a)=>{
    console.log(a)
})
.catch((b)=>{
    console.log(b)
})

// pending resolve/reject 

// all 

// new Promise(()=>{

// })

let ab=Promise.resolve("p1 Completed")
let ba=Promise.reject("p2 failed")

Promise.all([ab,ba])
.then((ab)=>{
    console.log(a)
})
.catch((a)=>{
    console.log(a)
})

// Promise.race 

// let pa = Promise.resolve("P1 done") 
// let pb = Promise.reject("P2 done") 

let pa = new Promise((reject)=>{
    setTimeout(()=>{
        reject("Pa is done")
    },1000)
})

let pb = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Pb is done")
    },500)
})

Promise.race([pa,pb])
.then((pa)=>{
    console.log(pa)
})
.catch((pa)=>{
    console.log(pa)
})

// Promise.allSettled() 
Promise.allSettled([pa,pb])
.then((a)=>{
    console.log(a)
})

// Promise.any() 
Promise.any([pa,pb])
.then((a)=>{
    console.log(a)
})

// Async and await 

function hai() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Done")
        },2000)
    })
}

async function hello1(){
    return await hai()
}
let s = hello1()
console.log(s)






