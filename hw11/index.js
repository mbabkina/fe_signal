const sleep = (length) =>
  new Promise((resolve) => setTimeout(resolve, length * 100))

const getChar = () => String.fromCharCode(Date.now().toString().substring(-5))

const getRandomChinese = async (length) => {
  let sign = ''
  while (sign.length < length) {
    await sleep(length)
    sign += getChar()
  }
  return sign
}

;(async () => {
  const result = await getRandomChinese(4)
  console.log(result)
})()
