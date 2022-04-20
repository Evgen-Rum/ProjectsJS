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
//
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
//
// const isProgrammer = true // boolean
// const num = 43.43 // float
// const name = 'Evgenii' // string
// const age = 23 // number
// let x
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x) // undefined
// console.log(null) // object

// 5 operator precedence
//
// const fullAge = 26
// const birthYear = 1999
// const currentYear = 2022
//
//  <= >= < >
// const isFullAge = currentYear - birthYear >= fullAge // 23 < 26 = false
// console.log(isFullAge)
//
// link to operator precedence table precedence table
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// 6 conditional statements
//
// const learningJS = 'pending' // ready fail pending
//
// if (learningJS === 'ready') {
//     console.log('JS learned!')
// } else if (learningJS === 'pending') {
//     console.log('In process of studying JS!')
// } else {
//     console.log('JS study failed!')
// }
//
// const isReady = true
//
// if (isReady) {
//     console.log('JS learned')
// } else {
//     console.log('JS study failed')
// }
//
// isReady ? console.log('JS learned') : console.log('JS study failed')
//
// const num1 = 42 // number
// const num2 = '42' // string
//
// console.log(num1 == num2) // true
// console.log(num1 === num2) // false

// 7 logical operators
//
// link to the table of logical operators
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators#%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B

// 8 functions
//
// function calculateAge(birthYear) {
//     return 2022 - birthYear
// }
// console.log(calculateAge(1999))
//
// function logInfoAbout (name, birthYear) {
//     const age = calculateAge(birthYear)
//     if (age > 0) {
//         console.log('Person\'s name: ' + name + '. Person\'s age: ' + age)
//     } else {
//         console.log('Incorrect birth year value!')
//     }
// }
//
// logInfoAbout('Evgenii', 1999)

// 9 arrays
// const cars = ['Mazda', 'Mercedes', 'Ford']
// const cars = new Array('Mazda', 'Mercedes', 'Ford')
// console.log(cars)
// console.log(cars[0])
// console.log(cars[1])
// console.log(cars[2])
// console.log(cars[3]) // undefined
//
// cars[0] = 'Porsche'
// console.log(cars)
// // cars[3] = 'Mazda'
// cars[cars.length] = 'Mazda'
// console.log(cars)

// 10 cycles
//
// const cars = ['Mazda', 'Mercedes', 'Ford', 'Porsche']
//
// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
// }
//
// for (let car of cars) {
//     console.log(car)
// }

// 11 objects

// const person = {
//     firstName: 'Evgenii',
//     lastName: 'Rumiantsev',
//     birthYear: 1999,
//     languages: ['Ru', 'Eng', 'BY'],
//     hasWife: false,
//     welcome: function () {
//         console.log('Welcome')
//     }
// }
// console.log(person)
// console.log(person.firstName)
// console.log(person['lastName'])
// const key = 'birthYear'
// console.log(person[key])
// person.welcome()
// person.hasWife = true
// person.isProgrammer = true

