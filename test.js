let sdtime1 = new Date('2018-03-22 16:34:55')

const floorTo10Minutes = (date) => {
    date.setMinutes(date.getMinutes() - date.getMinutes() % 10)
    date.setSeconds(0)
    date.setMilliseconds(0)
    return new Date(date)
}

const changeDate = (date, type, number) => {
    let newDate = new Date(date)
    if ('yyyy' === type) {
        newDate.setFullYear(newDate.getFullYear() + number)
    } else if ('MM' === type) {
        newDate.setMonth(newDate.getMonth() + number)
    } else if ('dd' === type) {
        newDate.setDate(newDate.getDate() + number)
    } else if ('HH' === type) {
        newDate.setHours(newDate.getHours() + number)
    } else if ('mm' === type) {
        newDate.setMinutes(newDate.getMinutes() + number)
    } else if ('ss' === type) {
        newDate.setSeconds(newDate.getSeconds() + number)
    } else if ('S' === type) {
        newDate.setMilliseconds(newDate.getMilliseconds() + number)
    }
    return newDate
}
floorTo10Minutes(sdtime1)
let a = changeDate(sdtime1, 'MM', 10)
console.info(a.toLocaleString())
