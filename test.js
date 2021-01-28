let sdtime1 = new Date('2018-03-22 16:34:55')
let daySart = new Date(new Date(new Date().toLocaleDateString()).getTime())
let dayEnd = new Date(new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1)
console.info(daySart.toLocaleString())
console.info(dayEnd.toLocaleString())

const floorTo10Minutes = (date) => {
    date.setMinutes(date.getMinutes() - date.getMinutes() % 10)
    date.setSeconds(0)
    date.setMilliseconds(0)
}

const changeDate = (date, type, number) => {
    if ('yyyy' === type) {
        date.setFullYear(date.getFullYear() + number)
    } else if ('MM' === type) {
        date.setMonth(date.getMonth() + number)
    } else if ('dd' === type) {
        date.setDate(date.getDate() + number)
    } else if ('HH' === type) {
        date.setHours(date.getHours() + number)
    } else if ('mm' === type) {
        date.setMinutes(date.getMinutes() + number)
    } else if ('ss' === type) {
        date.setSeconds(date.getSeconds() + number)
    } else if ('S' === type) {
        date.setMilliseconds(date.getMilliseconds() + number)
    }
}
floorTo10Minutes(sdtime1)
changeDate(sdtime1, 'dd', -23)
console.info(sdtime1.toLocaleString())
