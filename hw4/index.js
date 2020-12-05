const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"]
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"]
const marks = [4, 5, 5, 3, 4, 5]

const studentsPaired = (array) => {
    const pairs = []
    const arrayPaired = []
    while (array.length % 2 !== 0) alert('Students number is odd, please make sure you have even number')

    for (i = 0; i < (array.length / 2); i++) {
        pairs.push(array[i], array[array.length - i - 1])
        arrayPaired[i] = [...pairs]
        pairs.splice(0)
    }

    return arrayPaired
}

const themesMappedToPairs = (arrayPairs, arrayThemes) => {
    while (arrayPairs.length > arrayThemes.length) alert('You have more students pairs than themes. Please add the theme.')
    const themesMapped = []
    const pair = []

    for (i = 0; i < arrayPairs.length; i++) {
        pair[i] = arrayPairs[i].join(' і ')
        themesMapped[i] = [pair[i], arrayThemes[i]]
    }

    return themesMapped
}

const marksMappedToStudents = (arrayStudents, arrayMarks) => {
    while (arrayStudents.length > arrayMarks.length) alert('You have more students than marks. Please check inputs.')
    while (arrayStudents.length < arrayMarks.length) alert('You have more marks than students . Please move inputs.')
    const marksMapped = []

    for (i = 0; i < arrayMarks.length; i++) {
        marksMapped[i] = [arrayStudents[i], arrayMarks[i]]
    }

    return marksMapped
}

const getRandomIntegerInRange = (startNumber, endNumber) => Math.round(startNumber + Math.random() * endNumber)

const randomThemeMarksMappedToPairs = (arrayThemesPairs) => arrayThemesPairs.map((pair) => {
    pair = [pair, getRandomIntegerInRange(1, 4)]
    return pair
})




document.writeln(
    `The initial array of students is: ${students}<br>
    The initail array of themes is: ${themes}<br>
    The initial array of marks is: ${marks}<br>
    <br>
    Pairs of students are as following:
    ${studentsPaired(students).join(' ; ')} <br>
    Themes assigned to pairs of students are:
    ${themesMappedToPairs(studentsPaired(students), themes).join(' ; ')}<br>
    Marks mapped to students are:
    ${marksMappedToStudents(students, marks).join(' ; ')}<br>
    Random marks for the theme for each pair are:
    ${randomThemeMarksMappedToPairs(themesMappedToPairs(studentsPaired(students), themes)).join(' ; ')}
    `
)