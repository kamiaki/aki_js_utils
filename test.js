/**
 * 随机生成字符串, 字符串数量, 字符串包含那些字符
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

let a = randomString(10)
let a1 = randomString(10)
let a2 = randomString(10)
console.info(a, a1, a2)
