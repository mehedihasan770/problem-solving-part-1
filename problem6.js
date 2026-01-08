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