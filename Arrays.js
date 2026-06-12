// Array:- 
            // A Array is a collection of data. And also it is a collection of both homogenius and heterogenius 
            // data. 
            // Arrays are enclosed by square braces[](To represent array we use square braces[]).
            // Each element in array is separated by (,). 
            
["Hello",01, true, null, undefined, {Name : "Mujasheer"}, [0,1,2,3,4,5,6,[00,0101,1010,10101,101010]], "End"]

// Multi Dimensional Array:- 
                            // A Array present in another array is called Multi Dimensional Array. 

// What is the need for the Array? 

// Name 
// Location 
// Address 

// var let and const 

// var Name = "Mujasheer"
// var Location = "Hyderabad"
// var Address = ""
// var Bloodgroup = ""

var arr = ["1", 2, 3, 4]
console.log(arr)

// Push :- 
            // It is used to add the elements at the end of the Array. 

function hai(){
    arr.push(5)
}
hai()

console.log(arr)

arr.push(6)
console.log(arr)

arr.push(7)
console.log(arr)

arr.push(8)
console.log(arr)

// Unshift:- 
            // Unshift is used to add the elements at the beginning of the Array. 

arr.unshift(0)
console.log(arr)

// Splice:- 
            // It is used to add the elements at any position in the Array. 

// Splice[Indexvalue, deletecount, new]

arr.splice(1,0,"Hai")
console.log(arr)

arr.splice(2,2,"How are you?")
console.log(arr)

// How to access a single item in array items:- 
// with the help of Index values. 
// It starts from 0 and ends with n-1 // n is the length of the array.

var a = [1,2,3,4,5]

console.log(a[0])
console.log(a[2])
console.log(a[4])

// Reference of the Array [0] [1] [2] [3] [4]..... n-1 

// Removing Elements from Arrays:- 

var b = [1,2,3,4,7]
console.log(b)

// Pop :- 
            // Pop is used to remove the element at the end of the Array. 
b.pop()
console.log(b)

// Shift:- 
            // It is used to remove the element at the beginning of the Array. 

console.log(b)
b.shift()
console.log(b)

// Splice:- 
            // It is used both for adding and removing elements at any position in the Array. 

b.splice(0,1)
console.log(b)

let h = [ 0,10,20,30,40,50,60]

console.log(h.length)
h.splice(0,7)
console.log(h)

// Finding Array Length:- 

console.log(arr.length)

// IndexOf :- 
                // IndexOf is used to find the index of a particular element in a Array. 
                // If the value is not present then it will return -1. 

let price = [100,50,500,1000,350,180,460]
console.log(price)
console.log(price[1])
console.log(price.indexOf(1000))
console.log(price.indexOf(0))

// Includes :- 
            //   It will just check the value is present or not in the Array. 
            // If its present it will return true, if not false. 

console.log(price)
console.log(price[1])
console.log(price.indexOf(500))
console.log(price.includes(1000))
console.log(price.includes(0))

// Last Index Of :- 
                    // The Lastindexof method in Javascript, is used to find the last position(index value) 
                    // of a given element inside an array or string. 
                    // It searchs from right to end(end to start)


console.log(price)
console.log(price.lastIndexOf(1000))
console.log(price.lastIndexOf(180))

let price1 = [100,30,70,100,40,50,100,1000]
console.log(price1)
console.log(price1.lastIndexOf(100))

// Making array length to zero 

let price2 = [10,20,30,40,50,60]

console.log(price2)
console.log(price2.length)
price2.length = 0 
console.log(price2.length)

// Combining Two Arrays:-

// Concat:- 
            // It is used to combine two arrays. 

let p = [0,1,2,3,4]
let q = ["Hai","How are you","Hello",5,6]
let pq = p.concat(q)
console.log(pq)

// Spread:- 
            // It is used to combine more than Two arrays. 

let i = [0,1,2,3,4,5]
let j = [6,7,8,9,10]
let k = ["Fruits","Carrots", "Orange"]

let all = [...i,...j,...k]
console.log(all)

// Loops:- 

// For :- 

let fruits = ["apple", "banana", "mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// For of :- 

let fruit1 = [ "banana", "mango","apple"];

for (let fruit of fruit1) {
  console.log(fruit);
}

// For Each :- 

let fruit3 = ["apple", "banana", "mango"];

fruit3.forEach(function(fruit, index) {
  console.log(index + ": " + fruit);
});


