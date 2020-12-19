const getRandomChinese = (length) => new Promise(function(resolve, reject) {
    setTimeout(() => {
        let string = ''
        while (string.length < length) {
            let sign = Date.now().toString().substring(9)
            let char = String.fromCharCode(sign)
            string += char
        }
        console.log(string)
    }, (50 * length));


})

getRandomChinese(4)