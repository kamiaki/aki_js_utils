// 随机小数
const randomFlow = (n, m, point) => {
    let pointLen = Math.pow(10, point)
    let result = n
    if (n < m) {
        result = Math.random() * (m + 1 - n) + n
        while (result > m) {
            result = Math.random() * (m + 1 - n) + n
        }
    }
    let randomNum = Math.round(result * pointLen) / pointLen
    return randomNum
}

export {randomFlow}
