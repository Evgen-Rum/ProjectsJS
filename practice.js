// Tasks from codewars


// Task 1 - count the number of vowels in a string
// function getCount(str) {
//     let vowelsCount = 0;
//     let vowelsList = 'aeiou'
//     for (let x = 0; x <= str.length; x++) {
//         if (vowelsList.indexOf(str[x]) !== -1) {
//             vowelsCount++
//         }
//     }
//     return vowelsCount;
// }
//
// console.log(getCount('fa del   igoku'))


// Task 2 - find the maximum and minimum values in a string of numbers
// const numbers = "1 9 3 4 -5"
//     function highAndLow(numbers){
//         numbers = numbers.split(' ').map(Number)
//         return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers)
//     // const arr = str.split(' ')
//     // return console.log(`Min: ${Math.min(...arr)}, Max: ${Math.max(...arr)}`)
// }
//
// console.log(highAndLow(numbers))


/* Task 3 - Take 2 strings s1 and s2 including only
letters from ato z. Return a new sorted string, the longest possible,
containing distinct letters - each taken only once - coming from s1 or s2
 */
// const s1 = 'xyaabbbccccdefww'
// const s2 = 'xxxxyyyyabklmopq'
//
// function longest(s1, s2) {
//     return Array.from(new Set(s1 + s2)).sort().join('')
// }
//
// console.log(longest(s1, s2))


// Task 4 - Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
// const binaryArr = [0, 1, 1, 0]
//
// function binaryArrayToNumber(arr) {
//     return parseInt(arr.join(''), 2)
// }
//
// console.log(binaryArrayToNumber(binaryArr))

/* Task 5
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems.
It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
Ribonucleic acid, RNA, is the primary messenger molecule in cells.
RNA differs slightly from DNA its chemical structure and contains no Thymine.
In RNA Thymine is replaced by another nucleic acid Uracil ('U').
Create a function which translates a given DNA string into RNA.
 */
// const dna = 'TUUUTUT'
// function DNAtoRNA(dna) {
//     const result = dna.replace(/T/g, 'U')
//     return result
// }
//
// console.log(DNAtoRNA(dna))

/* Task 6
Write a program that finds the summation of every number from 1 to num.
 The number will always be a positive integer greater than 0.
 */
// let summation = (num) => {
//     let sum = 0
//     for (let i = 0; i <= num; i++) {
//         sum += i
//     }
//     return sum
// }
// console.log(summation(5))

/* Task 7
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.
Return the resulting string.
Note: input will never be an empty string
 */
const result = (strOfNum) => {
    return strOfNum.split('').map(n => n < 5 ? 0 : 1).join('')
}
