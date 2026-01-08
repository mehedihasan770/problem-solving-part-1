// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.

const reverseString = (string) => {
    const reversed = string.split("").reverse().join("");
    return reversed;
} 

console.log(reverseString('hello'))



// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

const vowels = (string) => {
    const findVowels = string.toLowerCase().split("").filter(s => s === "a" || s === "e" || s === "i" || s === "o" || s === "u");
    return findVowels.length;
}
console.log(vowels('programming'))


// Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward and backward).

const palindrome = (string) => {
    const reversed = string.split("").reverse().join("");
    return string === reversed;
}
console.log(palindrome('madam'))


// Problem 4: Find the Maximum Number
// Write a function that takes an array of numbers and returns the largest number.

const maxNumberFind = (number) => {
    let maxNumber = number[0]
    for (let n = 0; n < number.length; n++) {
        if(number[n] > maxNumber){
            maxNumber = number[n]
        }
    }
    return maxNumber
}
console.log(maxNumberFind([755,-1,2,3,-4000,5,6,-9,8,]))


// Problem 5: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array.

const removeDuplicates = (number) => {
    let newArray = [];
    for(let n = 0; n < number.length; n++){
        if(!newArray.some(a => a === number[n])){
            newArray.push(number[n])
        }
    }
    return newArray;
}
console.log(removeDuplicates([1,1,1,1,2,2,3,4,5,6,4,6,5]))


// Problem 6: Sum of All Numbers in an Array
// Write a function that returns the sum of all numbers in an array.

const numbers = (number) => {
    let sum = 0
    for(let n = 0; n < number.length; n++){
        sum = number[n] + sum;
    }
    return sum;
}
console.log(numbers([ 1, 2, 3, 4, 5, 6 ]))


// Problem 7: Find Even Numbers in an Array
// Write a function that returns all even numbers from a given array.

const number1 = (number) => {
    let even = []
    for(let n = 0; n < number.length; n++){
        if(number[n] % 2 === 0){
            even.push(number[n])
        }
    }
    return even;
}
console.log(number1([ 1, 2, 3, 4, 5, 6 ]))


// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.

const capitalize = (string) => {
    const splitWord = string.split(' ')
    for(let s = 0; s < splitWord.length; s++){
        const upperCase = splitWord[s][0].toUpperCase();
        splitWord[s] = upperCase + splitWord[s].slice(1)
    }
    return splitWord.join(' ')
}
console.log(capitalize('hallo world Hallo'))


// Problem 9: Find the Factorial of a Number
// Write a function that calculates the factorial of a number using a loop.

const calculates = (number) => {
    let factorial = 1
    for(let n = 1; n <= number; n++){
        factorial = factorial * n
    }
    return factorial
}
console.log(calculates(5))


// Problem 10: PingPong Challenge
// Write a function that prints numbers from 1 to 20.

const pingPong = (number) => {
    for(let n = 1; n <= number; n++){
        if(n % 3 === 0 && n % 5 === 0){
            console.log('pingPong')
        }
        else if(n % 3 === 0){
            console.log('ping')
        }
        else if(n % 5 === 0){
            console.log('pong')
        }
        else{
            console.log(n);
        }
    }
}
pingPong(20)