// 生成uuid
const uuid = () => {
    let s = []
    let hexDigits = '0123456789abcdef'
    for (let i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
    }
    s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = '-'
    let uuid = s.join('')
    return uuid
}

// 睡眠
const sleep = numberMillis => {
    let now = new Date()
    let exitTime = now.getTime() + numberMillis
    while (true) {
        now = new Date()
        if (now.getTime() > exitTime) {
            return
        }
    }
}

// obj转url参数
const objToUrl = obj => {
    let arr = []
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            let value = encodeURIComponent(obj[i])
            if (value === null || value === 'undefined') value = ''
            arr.push(encodeURIComponent(i) + '=' + value)
        }
    }
    let url = arr.join('&')
    return url
}

// 深拷贝
const clone = obj => {
    let cloneObj = JSON.parse(JSON.stringify(obj))
    return cloneObj
}

// 分割数组
/**
 * 将给定数组，每组size个
 * @param arr
 * @param size
 * @returns {[]}
 */
let splitArray = (arr, size) => { // size=5，要分割的长度
    const arrNum = Math.ceil(arr.length / size, 10) // Math.ceil()向上取整的方法，用来计算拆分后数组的长度
    let index = 0 // 定义初始索引
    let resIndex = 0 // 用来保存每次拆分的长度
    const result = []
    while (index < arrNum) {
        result[index] = arr.slice(resIndex, size + resIndex)
        resIndex += size
        index++
    }
    return result
}

/**
 * 随机生成字符串, 字符串数量, 字符串包含那些字符, 不填范围是ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
 * @param len
 * @param charSet
 * @returns {string}
 */
function randomString(len, charSet) {
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    for (let i = 0; i < len; i++) {
        let randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
    return randomString;
}

export {
    uuid, sleep, objToUrl, clone, splitArray, randomString
}
