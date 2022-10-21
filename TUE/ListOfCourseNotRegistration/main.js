const student = require('./student')
const course = require('./course')
function CourseManagement() {
    let courseList = []
    function addCourse(id, name, desc) {
        return courseList.push(new course(id, name, desc))
    }
    function updateCourse(id, edit_course) {
        const index = courseList.findIndex(course => course.id === id)
        return courseList[index] = edit_course
    }
    function deleteCourse(id) {
        return courseList = courseList.filter(c => c.getId() !== id)
    }
    function findByName(name) {
        return courseList.find(c => c.getName() === name)
    }
    function findById(id) {
        return courseList.find(c => c.getId() === id)
    }
    function getAllCourse() {
        return courseList
    }
    return { addCourse, updateCourse, deleteCourse, findByName, findById, getAllCourse }
}
function showListOfCourseNotRegistration(student, courses) {
    const allCourseOfYear = courses.filter(course => {
        return course.id.startsWith(student.getYear(), 3)
    })
    const courseOfStudent = student.courses
    allCourseOfYear.sort((a, b) => {
        if (a.getId() < b.getId()) return -1
        else if (a.getId() > b.getId()) return 1
        else return 0
    })
    return allCourseOfYear.filter(allCourse => !courseOfStudent.some(stdCourse => stdCourse.id === allCourse.id))
}
let allCourse = []
{
    const { addCourse, getAllCourse } = CourseManagement()
    addCourse('INT100', 'IT Fund')
    addCourse('INT101', 'Program Fund')
    addCourse('INT102', 'Web Tech')
    addCourse('INT114', 'Discrete')
    addCourse('INT103', 'Advance Prog')
    addCourse('INT105', 'Basic SQL')
    addCourse('INT104', 'User Experience')
    addCourse('INT201', 'Web based Client Side I')
    addCourse('INT202', 'Server Side I')
    addCourse('INT205', 'Database Mgt')
    addCourse('INT207', 'Network I')
    addCourse('INT214', 'Statistics IT')
    addCourse('INT203', 'Web based Client Side II')
    addCourse('INT204', 'Web Tech')
    addCourse('INT206', 'Web-based Server Side II')
    addCourse('INT208', 'Network II')
    addCourse('INT209', 'DevOps')
    addCourse('INT210', 'Arch Int Deploy')
    addCourse('INT221', 'INT 221 Int IT Project I')
    addCourse('INT305', 'Un-and Semi Structured Data')
    addCourse('INT307', 'Security I')
    addCourse('INT314', 'Applied Mathematics for Data Science')
    addCourse('INT319', 'IT Pro Comm')
    addCourse('INT321', 'DevOps')
    addCourse('INT308', 'Security II')
    addCourse('INT339', 'Prep Career Training')
    addCourse('INT340', 'Career Training')
    addCourse('INT365', 'Capstone IT Proj I')
    addCourse('INT314', 'Applied Mathematics for Data Science')
    addCourse('INT319', 'IT Pro Comm')
    allCourse = getAllCourse()
}

const studentCourse = CourseManagement()
studentCourse.addCourse('INT100', 'IT Fund')
studentCourse.addCourse('INT101', 'Program Fund')
studentCourse.addCourse('INT102', 'Web Tech')
studentCourse.addCourse('INT206', 'Web-basedSS2')
studentCourse.addCourse('INT208', 'Network II')
const profile = new student(64130500004, "Kasidate Phlaiphueak", 2, studentCourse.getAllCourse())
console.log(profile)
console.log(`---------------`)

console.log(showListOfCourseNotRegistration(profile, allCourse))