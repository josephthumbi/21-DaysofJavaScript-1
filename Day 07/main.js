// Creating an array
let fruits = ["Apple", "Banana", "Orange", "Mango", "Kiwi"];

// Accessing elements in the array
console.log("Fruits:", fruits);
console.log("First fruit:", fruits[0]);
console.log("Third fruit:", fruits[2]);

// Modifying elements in the array
fruits[1] = "Grapes";
console.log("Modified array:", fruits);

// Adding elements to the end of the array
fruits.push("Pineapple");
console.log("Array after push:", fruits);

// Removing the last element from the array
let lastFruit = fruits.pop();
console.log("Removed fruit:", lastFruit);
console.log("Array after pop:", fruits);

// Adding elements to the beginning of the array
fruits.unshift("Cherry");
console.log("Array after unshift:", fruits);

// Removing the first element from the array
let firstFruit = fruits.shift();
console.log("Removed fruit:", firstFruit);
console.log("Array after shift:", fruits);

// Finding the index of an element
let indexOfMango = fruits.indexOf("Mango");
console.log("Index of Mango:", indexOfMango);

// Removing an element by index
let removedElement = fruits.splice(indexOfMango, 1);
console.log("Removed element:", removedElement);
console.log("Array after splice:", fruits);

// Slicing the array
let slicedArray = fruits.slice(1, 3);
console.log("Sliced array:", slicedArray);
