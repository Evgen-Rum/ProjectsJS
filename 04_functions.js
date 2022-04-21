
// 1 function declaration

// greet('Evgenii') // true
// function greet(name) {
//     console.log(`Hello ${name} !`)
// }
// greet('Evgenii') // true
//
// // 2 function expression
//
// // greet1('Evgenii') //err
// const greet1 = function greet1(name) {
//     console.log('Hello', name, '!')
// }
// greet1('Evgenii') // true
//
// console.dir(greet)
//
// // 3 anonymous functions
//
// let counter = 0
// const interval = setInterval(function () {
//     if (counter === 5) {
//         clearInterval(interval)
//     } else {
//         console.log(++counter)
//     }
// }, 1000)

// 4 arrow functions

// function greet(name) {    // f declaration
//     console.log('Hello', name, '!')
// }
// greet('Evgenii')
//
// const arrow = (name) => {   // f expression
//     console.log('Hello ' + name + ' !')
// }
// arrow('Victor')
//
// const arrow2 = name => console.log(`Hello ${name} !`)   // f expression
// arrow2('Tatyana')
//
// // greet = arrow = arrow2
//
// const pow2 = num => console.log(num ** 2)   // f expression
// pow2(5)

// 5 default settings

// const sum = (a = 1, b = 2) => a + b
//
// console.log(sum())
// console.log(sum(31, 24))
//
// function sumAll(...all) {
//     let result = 0
//     for (let num of all) {
//         result +=num
//     }
//     return result
// }
//
// console.log(sumAll(1, 2, 3, 4, 5, 6, 7))

// 6 f closure

// function createMember(name) {
//     return function(lastName) {
//         console.log(`Member ${name} ${lastName} is created!`)
//     }
// }
//
// const logOfMember = createMember('Evgenii')
//
// console.log(logOfMember('Rumiantsev'))
// logOfMember('lastName')