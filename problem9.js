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