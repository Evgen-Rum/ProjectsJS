
const cars = ['Mazda', 'Mercedes', 'BMW', 'Audi', 'Ford']
const fib = [1, 1, 2, 3, 5, 8, 13]
console.log(cars)

// function
function someFunction() {
    // some logic...
}

// Method
cars.push('Porshe') // adding an element to the beginning
console.log(cars)

cars.unshift('Honda') // adding an element to the end
console.log(cars)

cars.shift() // removes and returns the first element of the array
console.log(cars)

const firstElem = cars.shift()
console.log(firstElem, ' is the first and removed element of the array')
console.log(cars)

cars.pop() // removes and returns the last element of the array
console.log(cars)

const lastElem = cars.pop()
console.log(lastElem, ' is the last and removed element of the array')
console.log(cars)