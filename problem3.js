// Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward and backward).

const palindrome = (string) => {
    const reversed = string.split("").reverse().join("");
    return string === reversed;
}
console.log(palindrome('madam'))