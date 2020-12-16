const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }

}];

/* Function 1 - Subjects list for a student*/

const getSubjects = (studentIndex) => Object.keys(students[studentIndex].subjects).map((s) =>
    (s[0].toUpperCase() + s.slice(1).toLowerCase().replace('_', ' '))
);

console.log(getSubjects(0));

/* Function 2 - Avarage mark for a student */

const getAverage = (array) => {
    const integerArray = array.filter((number) => Number.isInteger(+number));

    const sum = integerArray.reduce((summedArray, number) => {
        return summedArray + +number;
    }, 0);

    return +(sum / integerArray.length).toFixed(2);
}

const getAverageMark = (studentIndex) => getAverage(Object.values(students[studentIndex].subjects).join().split(','))

console.log(getAverageMark(0));

/* Function 3 - Student info */

const getStudentInfo = (studentIndex) =>
    ({
        course: students[studentIndex].course,
        name: students[studentIndex].name,
        avrageMark: getAverageMark(studentIndex),
    })

console.log(getStudentInfo(2));

/* Function 4 - Get name in alpabetical order */

const getStudentsNames = (array) => array.map(student => student = student.name).sort()

console.log(getStudentsNames(students));

/* Function 5  - Best students */
const getBestStudent = (array) => {
    const averageMarks = [];
    array.forEach(student => {
        averageMarks.push(getAverageMark(array.indexOf(student)))
    });

    const highestMark = Math.max(...averageMarks);
    const index = averageMarks.indexOf(highestMark);

    return array[index].name;
}

console.log(getBestStudent(students));


/* Function 6 - String to object */

const deleteDuplicateLetter = (string) => { /* delete duplicated letters to use as keys */
    let counter;
    let noDuplcatesString = string;
    for (i = 0; i < noDuplcatesString.length; i++) {
        counter = countLetter(string, string.charAt(i));

        if (counter > 1) noDuplcatesString.slice(i, 1);
    }
    return noDuplcatesString;
}

const countLetter = (word, letter) => { /* count letters to use as values */
    let counter = 0;
    for (let i = 0; i < word.length; i++) {
        if (word.toLowerCase().charAt(i) === letter.toLowerCase()) counter++;
    }

    return counter;
}

const convertStringToObject = (string) => {
    const resultObject = {};
    let keysArray = [...deleteDuplicateLetter(string)];
    const valuesArray = [];

    keysArray.forEach(key => {
        valuesArray.push(countLetter(string, key))
    });

    keysArray.forEach((key, i) => resultObject[key] = valuesArray[i]);
    return resultObject
}

console.log(convertStringToObject('test'));