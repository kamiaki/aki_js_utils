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
            if (value || value === 'undefined') value = ''
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
export {uuid, sleep, objToUrl, clone}
