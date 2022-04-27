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
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
            resolve()
            }, wait)
        })
    return promise
}

delay(2500).then(() => {
    console.log('After 2 second')
}).catch(err => {
    console.error(err)
}).finally( () => {
        console.log('Finally')
})