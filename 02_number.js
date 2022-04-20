// Number
//
// const num = 10 // integer
// const float = 42.42 // float
// const pow = 10e3 // =10000
// console.log(pow)
//
// console.log('MAX_SAFE_INTEGER: ' + Number.MAX_SAFE_INTEGER)
// console.log('MIN_SAFE_INTEGER: ' + Number.MIN_SAFE_INTEGER)
//
// console.log(Math.pow(2, 53) - 1) // = MAX_SAFE_INTEGER
//
// console.log('MIN_VALUE: ' + Number.MIN_VALUE)
// console.log('MAX_VALUE: ' + Number.MAX_VALUE)
//
// console.log('POSITIVE_INFINITY: ' + Number.POSITIVE_INFINITY)
// console.log('NEGATIVE_INFINITY: ' + Number.NEGATIVE_INFINITY)
// console.log('2 / 0 = ' + 2 / 0)
//
// console.log(Number.NaN) // Not a Number
// console.log(typeof NaN)
//
// const weird = 2 / undefined
// console.log(isNaN(weird))
// console.log(Number.isNaN(42))
// console.log(isFinite(Infinity))
// console.log(Number.isFinite(42))
//
// const stringInt = '40'
// const stringFloat = '40.42'
// console.log(stringInt + 2) // string 402
// console.log(Number.parseInt(stringInt) + 2) // int
// console.log(parseInt(stringInt) + 2) // int
// console.log(Number(stringInt) + 2) //int
// console.log(+stringInt + 2) // int
//
// console.log(parseFloat(stringFloat) + 2) // float
// console.log(+stringFloat + 2) //float
//
// console.log(0.4 + 0.2) // 0.6000000000000001
// console.log((0.4 + 0.2).toFixed(1)) // 0.6 string
// console.log(parseFloat((0.4 + 0.2).toFixed(1))) // 0.6 float

// BigInt

// console.log(typeof 900719925474099100009) // number
// console.log(typeof 900719925474099100009n) // BigInt
// console.log(parseInt(10n) - 4)
// console.log(10n - BigInt(4))
// console.log(5n / 2n)

// Math

// console.log(Math.E)
// console.log(Math.PI)
//
// console.log(Math.sqrt(25))
// console.log(Math.pow(5, 2))
// console.log(Math.abs(-42))
// console.log(Math.max(24, 24, 345, 45, 3423, 1))
// console.log(Math.min(3, 34, 66, 877, 8, 2, 6456))
// console.log(Math.floor(2.9)) // rounding up
// console.log(Math.ceil(2.9)) // rounding down
// console.log(Math.round(2.9)) // if 0.5 and more - rounding up. If less than 0.5 - rounding down (2.5 = 3  2.4 = 2)
// console.log(Math.trunc(2.9)) // returns the integer part of a number by removing all decimals (13.37 = 13 42.87 = 42 -0.123 = -0)
// console.log(Math.random())
//
// // examples
//
// console.log(Math.random() * 101) // random decimal number from 0 to 100
//
// function getRandomBetween(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }
//
// console.log(getRandomBetween(10, 42))