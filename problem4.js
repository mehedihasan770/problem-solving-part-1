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