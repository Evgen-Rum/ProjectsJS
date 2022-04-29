// Tasks from codewars

// Task1 - count the number of vowels in a string
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

// Task2 - find the maximum and minimum values in a string of numbers

const numbers = "1 9 3 4 -5"
    function highAndLow(numbers){
        numbers = numbers.split(' ').map(Number)
        return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers)
    // const arr = str.split(' ')
    // return console.log(`Min: ${Math.min(...arr)}, Max: ${Math.max(...arr)}`)
}

console.log(highAndLow(numbers))
