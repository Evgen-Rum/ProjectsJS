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

const delay = (wait = 1000) => {
        new Promise(() => {
            setTimeout(() => {

            }, wait)
        })
}