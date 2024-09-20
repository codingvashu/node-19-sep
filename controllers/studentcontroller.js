const Student = require('../models/Student');
const student = require('../models/Student');
async function addStudent(req,res){
    try {
        console.log(req.body);
        let student = new Student(req.body);
        await student.save();
        res.render('student')

        
    } catch (err) {
        console.log(err)
        
    }
}
async function getStudent(req,res){
    try {
        let students = await Student.find({});
        console.log(students);
        res.render('studentdetailed',{
            students: students
        });
        
    } catch (err) {
        
    }
}
module.exports = {
    addStudent,getStudent
}