const fs = require('fs');
const path = require('path');

const DeleteStudent = (req, res) => {
  const { id } = req.params;
  if (!id) return res.send("student ID is required");

  const filePath = path.join(__dirname, '../data/students.json');
  const students = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  const student = students.find(student => student.id === parseInt(id));
  if (!student) {
    return res.render('edit-student', { message: "student not found" });
  }

  const updatedStudents = students.filter(student => student.id !== parseInt(id));
  fs.writeFileSync(filePath, JSON.stringify(updatedStudents, null, 2)); // null,2 للتنسيق

  res.redirect('/students');
};

module.exports = { DeleteStudent };
