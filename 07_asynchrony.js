// Event loop

// const timeOut = setTimeout(() => {
//     clearTimeout(timeOut)
//     console.log('After timeout')
// }, 2500)

const interval = setInterval(() => {
    clearInterval(interval)
    console.log('Interval')
}, 2000)