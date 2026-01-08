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