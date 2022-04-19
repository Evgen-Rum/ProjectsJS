// 1 variables
// const firstName = 'Evgenii'
// const lastName = 'Rumiantsev' //string
// let age = 23 //number
// const isProgrammer = true // boolean
//
// const _ = 'private'
// let $ = 'some value'
// const withNum5 = '5'

// 2 Mutation
// console.log('The person\'s name is ' + firstName + ', and the person\'s age is ' + age)
// alert('The person\'s name is ' + firstName + lastName + ', and the person\'s age is ' + age) //browser only

// const lastName = prompt('Please enter last name!')
// console.log(firstName + ' ' + lastName + ' ' + age)
// alert(firstName + ' ' + lastName)

// 3 operators
// const currentYear = 2022
// const birthYear = 1999
//
// const age = currentYear - birthYear
// console.log(age)
//
// let a = 10
// const b = 5
//
// let c = 32
// c += a
// console.log(c)
// c -= a
// console.log(c)
// c *= a
// console.log(c)
// c /= a
// console.log(c)
//
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(a++)
// console.log(a)
// console.log(--a)

// 4 data types

// const isProgrammer = true //boolean
// const name = 'Evgenii' //string
// const age = 23 //number
// let x
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x) //undefined
// console.log(null) //object

// 5 operator precedence

// const fullAge = 26
// const birthYear = 1999
// const currentYear = 2022
//
//  <= >= < >
// const isFullAge = currentYear - birthYear >= fullAge //23 < 26 = false
// console.log(isFullAge)

// link to operator precedence table
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// 6 conditional statements

const learningJS = 'pending' //ready fail pending

if (learningJS === 'ready') {
    console.log('JS learned!')
} else if (learningJS === 'pending') {
    console.log('In process of studying JS!')
} else {
    console.log('JS study failed!')
}

const isReady = false

if (isReady) {
    console.log('JS learned')
} else {
    console.log('JS study failed')
}

const num1 = 42 // number
const num2 = '42' // string

console.log(num1 == num2) // true
console.log(num1 === num2) // false