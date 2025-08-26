const {app}=require('index');
const{Register,RegisterUser}=require('./controllers/register')
const {Finduser,Login}=require('../constrollers/login');
const { Logout } = require('./controllers/logout');
const {AddStudent,AddStudentPost,GETStudents,GETUsers,DeleteUser}=require('./controllers/add_student')
const {DeleteStudent}=require('./controllers/edit_student.js')
const {EditStudent,EditStudentPost}=require('./controllers/edit_student')
app.get('/login',Login);
app.post('/login',Finduser);

app.get('/register',Register);
app.post('/register',RegisterUser);

app.get('/logout',Logout)


app.get('/add-student',AddStudent)
app.post('/add-student',AddStudentPost)

app.get('/students',GETStudents)
app.get('/users',GETUsers)

app.post('/delete-user/:id',DeleteUser)

app.get('/edit-student/:id',EditStudent)
app.post('/edit-student/:id',EditStudentPost)
app.post('/delete-student/:id',DeleteStudent)