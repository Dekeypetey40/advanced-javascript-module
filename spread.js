/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let array1 = [1, 2, 3];
let array2 = array1;
array2.push(4);
//the above makes both arrays get the 4


// Copying an array
let arr3 = [4, 5, 6];
let arr4 = [...arr3];
arr4.push(7)
//the above only gives the 7 to arr 4

// Copying an object
let obj1 = {a: 1, b: 2, c: 3};
let obj2 = {...obj1, d: 4};
//copy obj1 and add something
let obj3 = {...obj1, b: 5};
//copied obj1 and changed something
console.log(obj1)
console.log(obj3)

// Copying only part of an array/object
let arr5 = [...array1, {...obj1 }, ...arr3, "x", "y", "z"];
console.log(arr5)