// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.

const reverseString = (string) => {
    const reversed = string.split("").reverse().join("");
    return reversed;
} 

console.log(reverseString('hello'))