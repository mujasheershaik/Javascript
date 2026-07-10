// Arrays 
// Collection of data (Collection of homogenous or heterogenous data)
// To represent an array we use [] 

["hello",12,true,null,undefined,{name:"Mujasheer"},[1,2,3,[1,11,222,]],"end"]

// Multi dimensional array // A array which is present in another array

// what is the need for the array ?

// name 
// location 
// address 
// ........ ... 

// var let and const 

// var name = "Mujasheer"
// var location = ""
// var address = ""
// // .. .. .. 


var arr = ["1",2,3,4]
console.log(arr)

// 4 
// 5 

// adding an element to an array
// push is used to add the elements at the end of the array 
// unshift is used to add the elements at the beginning of the array 

function hai (){
    arr.push(5)
}
hai ()
console.log(arr)
arr.push(6)
console.log(arr)
arr.push(7)
console.log(arr)

// unshift 

arr.unshift(8)
console.log(8)

// splice(indexvalue,delete count, new) // we can add an element at any location

arr.splice(2,1,"Hello")
// How to access single item in array items 
// with the help of index values 
// It starts from 0 and ends at n-1 // n---> length of the array

var a = [1,2,3,4]

console.log(a[0])
console.log(a[3])

// reference of the array [0] [1] [2] [3] 

// remove element from the array 

// pop 
// to remove last element from the array 

arr.pop()
console.log(arr)

// shift
// to remove first element from the array 

arr.shift()
console.log(arr)

// splice 
// to remove or add element 

arr.splice(1,1)
console.log(arr)

// console.log(arr.length) 

// [0,1,2,3] 

let num = [100,1,2,3,9]
console.log(num)
console.log(num[2])
console.log(num.indexOf(100))

// indexOf - index value or else -1 
// indexOf is used to find the index of the particular element in a Array
// If the value is not present then it will return -1 

// Includes  // True or False

console.log(num)
console.log(num[4])
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num.indexOf(0))
console.log(num.indexOf(100))
console.log(num.indexOf(1))
console.log(num.indexOf(2))
console.log(num.indexOf(3))
console.log(num.indexOf(9))
console.log(num.indexOf(100))
console.log(num.includes(0))
console.log(num.includes(100))
console.log(num.includes(1))
console.log(num.includes(2))
console.log(num.includes(3))
console.log(num.includes(9))


// last indexOf 

let num1 = [100,1,2,3,9]
console.log(num1)
console.log(num1.length)

// splice 
// num1.splice(0,arr.length) 
console.log(num1)

// Making array length to 0 

console.log(num1.length)
num1.length = 0
console.log(num1.length)


// Assigning empty array 

// Combine two arrays 

// concat 

var a = [1,2,3,4]
var b = ["a","b","c","d"]
console.log(a,b)
var c = a.concat(b)
console.log(c)

//concat, testing the array, join, sort,Flattening of array, removing duplicates, indexOf

var d =[...a,...b]
console.log(d)

// console.log(...a,...b) 

for(k of d){
    console.log(k)
}

var arr = [1,2,3,4]
for (i of arr){
    console.log(i)
}

for (j in arr){
    console.log(j) //It shows index values
}

for (j in arr){
    console.log(arr[j])
}

var arr = [1,2,3,4]
console.log(arr.map(i =>i*i))
for(i in arr){
    arr[i]=arr[i]+1
}
console.log(arr)

for(i of arr){
    console.log(i)
}

// testing the array 
// some and every 

console.log(arr.some(i => i>3))

console.log(arr.every(i => i>3))

// join 

console.log(arr.join("-"))

// sort 

let arr1 = [1,9,2,4,0,2,1,10,20]
// 0 1 1 2 2 4 9 10 20

console.log(arr1)
arr1.sort()
console.log(arr1)

arr1.sort((a,b)=> a-b)
console.log(arr1)

// Flattening of array 
let x = [1,2,3,[1]]
x.flat(1)
console.log(x)

// Removing duplicates 

var m = [1,2,3,4,1,2,8,6,10,20]
console.log(...new Set(m))

// indexOf()

var n = []

for(i of m){
    if(n.indexOf(i) == -1){
        n.push(i)
    }
}
console.log(m)
console.log(n)

// map, filter and reduce 

console.log(m.filter(i => i>3))

// for each 

m.forEach((i,j) => {
    console.log(i,j)
}
)

// reduce 

let arrm = [1,2,3,4,5]
console.log(arrm.reduce((i,j)=>i+j,0))

