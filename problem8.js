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