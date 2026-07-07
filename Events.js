// Event Bubbling :- 
                // It travels from Child element to parent element. 
                // Event bubbling means events move upward from child to parent.

let Child = document.getElementById("inner text")

function action(){
    console.log("Inner h1 clicked")
}
Child.addEventListener("click", action)

let div = document.getElementById("div")
function action1(){
    console.log("Parent Element")
}
div.addEventListener("click", action1)

let parent = document.getElementById("outer text")
function action2(){
    console.log("Outer Text Clicked")
}
parent.addEventListener("click", action2)

let div1 = document.getElementById("div1")
function action3(){
    console.log("Top Parent Element")
}
div1.addEventListener("click",action3)

// Event Capturing :- 
                    // It travels from Parent to child. 
                    // Event Capturing means events move downward from parent to child.

let Child2 = document.getElementById("inner text")
function action4(){
    console.log("Inner Text Clicked")
}
Child2.addEventListener("click",action4,true)

let div2 = document.getElementById("div")
function action5(){
    console.log("Parent Element1")
}
div2.addEventListener("click",action5,true)

let parent1 = document.getElementById("inner text")
function action6 (){
    console.log("Inner Text Clicked")
}
parent1.addEventListener("click",action6,true)

let div3 = document.getElementById("div1")
function action7(){
    console.log("Top Parent Element1")
}
div3.addEventListener("click",action7,true)

// Event Delegation :- 
                // Deligation event will be added to the parent element and the event will be used by all the child elements
                // Event Delegation is a technique where you attach one handler to a parent to manage events for its children

let list = document.getElementById("list")
function listclick(){
    console.log("clicked")
}
list.addEventListener("click",listclick)

// If we want specific list which we clicked or targeted then ;- 
// In the place of a we can use anything 
// list.addEventListener("click",function(a){
//     console.log(a.target)
// })

let fruits = document.getElementById("fruits")
function Fruits(){
    console.log("Fruits Listed")
}
fruits.addEventListener("click",function(b){
    console.log(b.target)
})

// window.onscroll 
// console.log(window)

// Normal Event :- 
                // Events are actions like clicks, key presses, etc. 
                // Runs every time the button is clicked.
                // Normal Events means Click or Key press like actions.  

let button = document.getElementById("button")
let a = 0
button.addEventListener("click",function(){
    a+=1
    console.log("Value of A is:",a)
    console.log("Button Clicked")
})

// Throttling :- 
            // Throttling means limiting how often a function runs in a given time. 
            // Throttling means it can run the function after the fixed gap only. 

let lastclick = 0
let b = 0
button.addEventListener("click",function(){
    let current =Date.now()
    if (current-lastclick>2000){
        b+=1
        console.log("Value of B is:",b)
        lastclick= current
    }
    console.log("Button Clicked")
})

// Debouncing :- 
            // Debouncing means delaying execution until the user stops performing an action. 


// 0
// 1
// 2
// 3
// 4 event 0 1 2 3 4 5 0 1 2 3 4 5 6 event
// 5
// event

// Debouncing 

let t
let c = 0
button.addEventListener("click",function(){
    clearTimeout(t)
    t=setTimeout(function(){
        c+=1
        console.log("Value of c is:",c)
    },2000)
})

// call back function : -
                    // A callback is a function passed into another function to run later. 

function function1(s){
    console.log(s)
}

function one(a,b,c){
    console.log("one is executed")
    c(a+b)
}
one(1,2,function1)

// Promise :- 
            // Promises handle asynchronous tasks (like API calls). 

// Syntax :- 

// Promise(()=>{

// })

let p = new Promise((resolve,reject)=>{
    let status = true
    if(status){
        console.log("Resolved")
        resolve("function successful")
    }
    else{
        console.log("Reject");
        reject("error")
    }
})

// p
// .then :- 
            // Runs when the promise is successful. 
            // True case 
            // Resolved 

// .catch :- 
            // Runs when the promise fails. 
            // Failure 
            // Reject 

p
.then((a)=>{
    console.log(a)
})
.catch((b)=>{
    console.log(b)
})