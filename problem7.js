// Problem 7: Find Even Numbers in an Array
// Write a function that returns all even numbers from a given array.

const numbers = (number) => {
    let even = []
    for(let n = 0; n < number.length; n++){
        if(number[n] % 2 === 0){
            even.push(number[n])
        }
    }
    return even;
}
console.log(numbers([ 1, 2, 3, 4, 5, 6 ]))