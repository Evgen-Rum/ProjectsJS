// Event loop

// const timeOut = setTimeout(() => {
//     clearTimeout(timeOut)
//     console.log('After timeout')
// }, 2500)
//
// const interval = setInterval(() => {
//     clearInterval(interval)
//     console.log('Interval')
// }, 2000)

// const delay = (callback, wait = 1000) => {
//     setTimeout(callback, wait)
// }
//
// delay(() => {
//     console.log('After 2 seconds')
// }, 2000)

// const delay = (wait = 1000) => {
//         const promise = new Promise((resolve, reject) => {
//             setTimeout(() => {
//             // resolve()
//                 reject('Something went wrong! Try Again!')
//             }, wait)
//         })
//     return promise
// }

// delay(2500).then(() => {
//     console.log('After 2 second')
// }).catch(err => {
//     console.error(err)
// }).finally( () => {
//         console.log('Finally')
// })

// const delay = (wait = 1000) => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject('Something went wrong! Try Again!')
//         }, wait)
//     })
//     return promise
// }
//
// delay(2500).then(() => {
//     console.log('After 2 second')
// }).catch(err => {
//     console.error('Error: ', err)
// }).finally( () => {
//     console.log('Finally')
// })

// const getData = () => new Promise(resolve => resolve([1, 1, 2, 3, 5, 8, 13]))
// // getData().then(data => console.log(data))
//
// async function asyncExample() {
//     try {
//         await delay(3000)
//         const data = await getData()
//         console.log('Data: ', data)
//     } catch (e) {
//         console.log(e)
//     } finally {
//         console.log('Finally')
//     }
// }
//
// asyncExample()