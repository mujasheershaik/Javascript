// Copying Of Objects :- 

// (1) Normal Copy 

// (2) Deep Copy 

// (3) Shallow Copy 

// (1) Normal Copy :- 
                    // Both variables point to the same object. Changing one changes the other. 

var obj = {a:"one", b:"two", c:"three"}

console.log(obj)

// obj    h1010291 --> 10123456
// obj1   h1028301 --> 10123456

var obj1 = obj

console.log(obj)
console.log(obj1)

obj.d = "four"

console.log(obj1)
console.log(obj)

// (2) Shallow Copy :- 
                        // Top-level properties are copied, but nested objects are still linked. 
                        // With the help of spread operator. 

var obj2 = {...obj}

console.log(obj2)
console.log(obj)

obj2.name = "Hello"

console.log("obj2",obj2)
console.log("obj",obj)

var original = {a:"one", b:"two", c:"three", obj:{d:"four", e:"five"}}

var copy = {...original}

copy.name = "Hello"
copy.obj.d = "Good Afternoon"
original.k = "bye"
console.log("copy",copy)
console.log("original",original)

// For primitive data types it will not change but for reference data types will changes. 

// (3) Deep Copy :- 
                    // Deep copy makes a completely independent copy, including nested objects. 
var copy1 = JSON.parse(JSON.stringify(original))

console.log("copy1",copy1)
console.log("original",original)

copy1.a = "bye"
copy1.obj.d = "hey"

// Copying of Arrays:- 

// (1) Normal Copy :- 

var arr = [923,232,44,12]

var copy2 = arr

console.log("arr",arr)

copy2[0] = 10
console.log("copy2",copy2)

// (2) Shallow copy :- 

var arr1 = [923,232,44,12,[91,24,16,37]]
var copy3 = [...arr1]

console.log("arr1",arr1)
console.log("copy3", copy3)

copy3[1] = 20

console.log("copy3",copy3)

copy3[4][1] = 15

console.log("copy3",copy3)

let Obj1 = { 
  name: "Mujasheer", 
  address: { city: "Hyderabad" } 
};

let Obj2 = Object.assign({}, Obj1);

Obj2.name = "Mujju";        // changes only Obj2
Obj2.address.city = "Delhi"; // changes both Obj1 and Obj2 (because nested object is shared)

console.log("Obj1",Obj1)

console.log("Obj2", Obj2)

// (3) Deep Copy :- 

var copy4 = JSON.parse(JSON.stringify(arr1))

console.log(copy4)

copy4[4][0] = "Hello"

console.log("copy4", copy4)

