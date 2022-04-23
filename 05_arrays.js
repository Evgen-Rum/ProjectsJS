
// const cars = ['Mazda', 'Mercedes', 'BMW', 'Audi', 'Ford']
// const fib = [1, 1, 2, 3, 5, 8, 13]
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

const cities = ['Minsk', 'NY', 'Berlin', 'Warsaw', 'Brest']

console.log(cities.includes('Minsk'))
console.log(cities.includes('Moskow'))

// Task 1
// const text = 'Hey! We study arrays in JS'
// const revText = text.split('').reverse().join('')
// /* split() - makes an array from a string
// reverse() - changes the sequence of elements of the given array and returns the reverse sequence
// join(delimeter) - concatenates the elements of an array into a string with the specified delimiter
//  */
// console.log(revText)