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

const subjectsList = function getSubjects(studentIndex) {
    return Object.keys(students[studentIndex].subjects).map((s) => {
        return (s[0].toUpperCase() + s.slice(1).toLowerCase());
    })
};

console.log(subjectsList(1));

/* Function 2 - Avarage mark for a student */

const average = function getAverage(array) {
    const integerArray = array.filter((number) => Number.isInteger(+number));

    const sum = integerArray.reduce((summedArray, number) => {
        return summedArray + +number;
    }, 0);

    return +(sum / integerArray.length).toFixed(2);
}

const averageMark = function getAverageMark(studentIndex) {
    return average(Object.values(students[studentIndex].subjects).join().split(','))
}

console.log(averageMark(0));

/* Function 3 - Student info */

const studentInfo = function getStudentInfo(studentIndex) {
    const infoObject = {
        course: students[studentIndex].course,
        name: students[studentIndex].name,
        avrageMark: averageMark(studentIndex),
    };

    return infoObject;
}

console.log(studentInfo(2));

/* Function 4 - Get name in alpabetical order */

const studentsNames = function getStudentsNames(array) {
    const names = [];
    array.forEach(student => {
        names.push(student.name)
    });

    return names.sort()
}

console.log(studentsNames(students));

/* Function 5  - Best students */
const bestStudent = function getBestStudent(array) {
    const averageMarks = [];
    array.forEach(student => {
        averageMarks.push(averageMark(array.indexOf(student)))
    });

    const highestMark = Math.max(...averageMarks);
    const index = averageMarks.indexOf(highestMark);

    return array[index].name;
}

console.log(bestStudent(students));


/* Function 6 - String to object */

const noDuplicates = function deleteDuplicateLetter(string) { /* delete duplicated letters to use as keys */
    let counter;
    let noDuplcatesString = string;
    for (i = 0; i < noDuplcatesString.length; i++) {
        counter = letterCount(string, string.charAt(i));

        if (counter > 1) noDuplcatesString.slice(i, 1);
    }
    return noDuplcatesString;
}

const letterCount = function countLetter(word, letter) { /* count letters to use as values */
    let counter = 0;
    for (let i = 0; i < word.length; i++) {
        if (word.toLowerCase().charAt(i) === letter.toLowerCase()) counter++;
    }

    return counter
}

const stringToObject = function convertStringToObject(string) {
    const resultObject = {};
    let keysArray = [...noDuplicates(string)];
    const valuesArray = [];

    keysArray.forEach(key => {
        valuesArray.push(letterCount(string, key))
    });

    keysArray.forEach((key, i) => resultObject[key] = valuesArray[i]);
    return resultObject
}

console.log(stringToObject('test'));