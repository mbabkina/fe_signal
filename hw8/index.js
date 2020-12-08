class Student {
    constructor(university, course, fullName, marks) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
    }
    getInfo() {
        console.log(`The student of the ${this.course} course of the ${this.university}, ${this.fullName}`)
    }
    get getMarks() {
        return this.marks
    }
    set setMarks(mark) {
        this.marks === null ? null : this.marks.push(+mark)
    }
    getAverageMark() {
        return (this.marks.reduce((total, mark) => {
            return total + +mark;
        }, 0) / this.marks.length).toFixed(2);
    }
    dismiss() {
        this.marksBeforeDismissal = this.marks;
        this.marks = null;
    }
    recover() {
        this.marks = this.marksBeforeDismissal
    }
}

const mikeVazovsky = new Student('Monster University', 2, 'Michael Vazovsky', [5, 4, 4, 5])
const jamesSally = new Student('Monster University', 1, 'James P. Salliwan', [3, 4, 2, 5])
const rendallBoggs = new Student('Monster college', 5, 'Rendall Boggs', [5, 3, 4, 5])

mikeVazovsky.getInfo()
jamesSally.getInfo()
rendallBoggs.getInfo()

console.log(`These are Sally's marks: ${jamesSally.getMarks}`)

jamesSally.setMarks = 5
console.log(`Recently Sally's got 5 for 'Scaring techniques', so now his marks are the following: ${jamesSally.getMarks}`)

console.log(`The average Sally's mark is: ${jamesSally.getAverageMark()}`)

rendallBoggs.dismiss()
console.log(`Sally was really happy when Rendal's got dismissed. Rendal's marks now are: ${rendallBoggs.getMarks}`)

rendallBoggs.recover()
console.log(`But the dean is a friend of Rendal's father, so Rendal was recovered soon. Rendal's marks now are: ${rendallBoggs.getMarks}`)

class BudgetStudent extends Student {
    constructor(university, course, fullName, marks) {
        super(university, course, fullName, marks)
        this.scholarship = this.getScholarship();
        setInterval(this.getScholarship.bind(this), 30000);
    }

    getScholarship() {
        const scolarship = 1400
        const minAverageMark = 4;

        (this.getAverageMark() >= minAverageMark) ?
        console.log(`${this.fullName} has got ${scolarship} hrn of scolarship`):
            console.log(`Sorry, no scolarship for ${this.fullName}`)
    }

}

const henryWaternoose = new BudgetStudent('Monster University', 5, 'Henry J. Waternoose II', [5, 4, 5, 5])