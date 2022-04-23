
const cars = ['Mazda', 'Mercedes', 'BMW', 'Audi', 'Ford']
const fib = [1, 1, 2, 3, 5, 8, 13]
//  console.log(cars)

// // function
// function someFunction() {
//     // some logic...
// }
//
// // Method
// cars.push('Porshe') // adding an element to the beginning
// console.log(cars)
//
// cars.unshift('Honda') // adding an element to the end
// console.log(cars)
//
// cars.shift() // removes and returns the first element of the array
// console.log(cars)
//
// const firstElem = cars.shift()
// console.log(firstElem, ' is the first and removed element of the array')
// console.log(cars)

// cars.pop() // removes and returns the last element of the array
// console.log(cars)

// const lastElem = cars.pop()
// console.log(lastElem, ' is the last and removed element of the array')
// console.log(cars)

// console.log(cars.reverse())

// const index = cars.indexOf('Mazda')
// cars[index] = 'Porsche'
// console.log(cars)

// const people = [
//  {name: 'Evgenii', budget: 4600},
//  {name: 'Anton', budget: 2000},
//  {name: 'Denis', budget: 3000}
// ]

// let findedPerson
// for (const person of people) {
//  if (person.budget === 2000) {
//   findedPerson = person
//  }
// }
// console.log(findedPerson)

// const index = people.findIndex(function(person) {
//  return person.budget === 4600
// })
// console.log(index)
//
// const person = people.find(function(person) {
//  return person.budget === 3000
// })
// console.log(person)

// const person = people.find((person) => {
//  return person.budget === 3000
// })
// console.log(person)

// const person = people.find(person => person.budget === 3000)
// console.log(person)

// const person = people.find(person => person.budget === 32000)
// console.log(person)  // undefined

// const cities = ['Minsk', 'NY', 'Berlin', 'Warsaw', 'Brest']
//
// console.log(cities.includes('Minsk'))
// console.log(cities.includes('Moskow'))

// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// })
// console.log(upperCaseCars)
// console.log(cars)
//
// const pow2Fib = fib.map(num => num ** 2)
// console.log(pow2Fib)
// console.log(fib)

// const pow2 = num => num ** 2
// // const sqrt = num => Math.sqrt(num)
// const pow2Fib = fib.map(pow2).map(Math.sqrt)
// console.log(pow2Fib)

// const pow2Fib = fib.map(pow2)
// const filteredNum = pow2Fib.filter(num => num > 20)
// console.log(pow2Fib)
// console.log(filteredNum)

// const pow2Fib = fib.map(pow2).filter(num => num > 20)
// console.log(pow2Fib)

// const people = [
//  {name: 'Evgenii', budget: 4600},
//  {name: 'Anton', budget: 2000},
//  {name: 'Denis', budget: 3000}
// ]
//
// const allBudget = people.filter(person => person.budget > 2000).reduce((acc, person) => {
//     acc += person.budget
//     return acc
// }, 0)
// console.log(allBudget)

// Task 1
// const text = 'Hey! We study arrays in JS'
// const revText = text.split('').reverse().join('')
// /* split() - makes an array from a string
// reverse() - changes the sequence of elements of the given array and returns the reverse sequence
// join(delimeter) - concatenates the elements of an array into a string with the specified delimiter
//  */
// console.log(revText)