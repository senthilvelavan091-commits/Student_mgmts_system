let students=[];
let form=document.getElementById("Studentform");
form.addEventListener("submit",function(event){
    event.preventDefault();
    addStudent();
});
function addStudent(){
    let name=document.getElementById("name");
    let email=document.getElementById("email");
    let age=document.getElementById("age");
    let course=document.getElementById("course");
    if(name===""||email===""||age===""||course===""){
        document.getElementById("message").textContent="All fields are requireds";
        return;
    }
    if(age<18){
        document.getElementById("message").textContent="Age must be 18 or above";
        return;
    }
    //creating student object
    let student={
        name:name,
        email:email,
        age:age,
        course:course,
    };
    //add students to the array
    students.push(student);
    displayStudents();
    form.reset()
    document.getElementById("message").textContent="Form submitted successfully!!";
}
function displayStudents(){
    let table=document.getElementById("studentTable");
    //clear the existing rows
    table.innerHTML=`
    <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Age</th>
        <th>Course</th>
    </tr>`;
    for(let i=0;i<students.length;i++){
        let row=`
        <tr>
            <td>${students[i].name}</td>
            <td>${students[i].email}</td>
              <td>${students[i].age}</td>
                <td>${students[i].course}</td>
        </tr>`;
        table.innerHTML+=row;
    };
}