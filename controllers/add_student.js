const fs=require('fs')

const AddStudent=(req,res)=>{
    res.render('add-student',{message:""});
}
const AddStudentPost=(req,res)=>{
    const { firstname,lastname, age, email,states,course } = req.body;
    if (!firstname || !lastname || !age || !email || !states || !course) {
        return res.render('add-student', { message: "All fields are required" });
    }
    fs.writeFileSync('../data/students.json', JSON.stringify({firstname,lastname, age, email,states,course}));
    // Logic to add student
    res.render('add-student', { message: "Student added successfully" });
}
const GETStudents=(req,res)=>{
    const students=JSON.parse(fs.readFileSync('../data/students.json'));
    let newarray=students.map((item=>({
        firstname:item.firstname,
        lastname:item.lastname,
        email:item.email,
    })))
    res.render('view-students',{newarray});
}
const GETUsers=(req,res)=>{
    const users=JSON.parse(fs.readFileSync('../data/users.json'));
    let newarray=users.map((item=>({
        username:item.username,
        fullName:item.fullName,
        email:item.email,
    })))
    res.render('manage-students',{newarray});
}
const DeleteUser=(req,res)=>{
    const { id } = req.params;
    if(!id) return res.send("User ID is required");

    const users=JSON.parse(fs.readFileSync('../data/users.json'));
    const user=users.find(user=>user.id===parseInt(id));
    if(!user) { return res.json("User not found");}
    const updatedUsers = users.filter(user => user.id !== id);
    fs.writeFileSync('../data/users.json', JSON.stringify(updatedUsers));
    res.redirect('/users');
}
module.exports = { AddStudent, AddStudentPost, GETStudents, GETUsers ,DeleteUser};