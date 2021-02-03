// 日期格式化 yyyy-MM-dd HH:mm:ss
const dateFormat = (date, fmt) => {
    // date校验
    let iDate = null
    if (typeof date === 'number') {
        iDate = new Date(date)
    } else if (typeof date === 'string') {
        date = date.replace(/-/g, '/')
        if (date.indexOf('T') > -1) {
            let dotIndex = date.indexOf('.')
            date = date.substr(0, dotIndex)
            date = date.replace('T', ' ')
            date = new Date(date).getTime()
        }

        if (!isNaN(Number(date))) {
            date = Number(date)
        }

        iDate = new Date(date)
    } else if (date instanceof Date) {
        iDate = date
    } else {
        return false
    }
    date = iDate
    // fmt校验
    if (!fmt) {
        fmt = 'yyyy-MM-dd HH:mm:ss'
    }
    // 转换
    var o = {
        'M+': date.getMonth() + 1, // 月份
        'd+': date.getDate(), // 日
        'H+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        'S': date.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    for (var k in o) { if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
    return fmt
}

// let a= minToHour(1880)
// console.info(a)
const minToHour = (str) => {
    if (str !== "0" && str !== "" && str !== null) {
        return ((Math.floor(str / 60)).toString().length < 2 ? "0" + (Math.floor(str / 60)).toString() :
            (Math.floor(str / 60)).toString()) + ":" + ((str % 60).toString().length < 2 ? "0" + (str % 60).toString() : (str % 60).toString());
    } else {
        return "";
    }
}

// let b= hourToMin('22:11')
// console.info(b)
const hourToMin = (str) => {
    var arrminutes = str.split(":");
    if (arrminutes.length == 2) {
        var minutes = parseInt(arrminutes[0]) * 60 + parseInt(arrminutes[1]);
        return minutes;
    } else {
        return 0;
    }
}

/**
 * 一天的开始 取本地年月日
 */
const startOfDay = () => {
    let daySart = new Date(new Date(new Date().toLocaleDateString()).getTime())
    return daySart
}

/**
 * 一天的结束 取本地年月日 + 一天 - 1毫秒
 */
const endOfDay = () => {
    let dayEnd = new Date(new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1)
    return dayEnd
}

/**
 * 设置日期向下取整到整点
 * @param date
 */
const floorTo60Minutes = (date) => {
    let newDate = new Date(date)
    newDate.setMinutes(0)
    newDate.setSeconds(0)
    newDate.setMilliseconds(0)
    return newDate
}

/**
 * 设置日期向下取整到10分钟
 * @param date
 */
const floorTo10Minutes = (date) => {
    let newDate = new Date(date)
    newDate.setMinutes(newDate.getMinutes() - newDate.getMinutes() % 10)
    newDate.setSeconds(0)
    newDate.setMilliseconds(0)
    return newDate
}

/**
 * 设置日期 加减 年月日时分秒毫秒
 * @param date
 * @param type
 * @param number
 */
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

export {floorTo60Minutes, floorTo10Minutes, changeDate, dateFormat, minToHour, hourToMin, startOfDay, endOfDay}
