// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

const vowels = (string) => {
    const findVowels = string.toLowerCase().split("").filter(s => s === "a" || s === "e" || s === "i" || s === "o" || s === "u");
    return findVowels.length;
}
console.log(vowels('programming'))