
// 1 function declaration

greet('Evgenii') // true
function greet(name) {
    console.log(`Hello ${name} !`)
}
// greet('Evgenii') // true

// 2 function expression

// greet1('Evgenii') //err
const greet1 = function greet1(name) {
    console.log('Hello', name, '!')
}
greet1('Evgenii') // true

// console.dir(greet)

// 3 anonymous functions

let counter = 0
const interval = setInterval(function () {
    if (counter === 5) {
        clearInterval(interval)
    } else {
        console.log(++counter)
    }
}, 1000)



