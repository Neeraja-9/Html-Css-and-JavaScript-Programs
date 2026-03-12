function getGrade(score){
    let grade;
    if(score>=80){
        grade='A';
    }
    else if(score>=60){
        grade='B';
    }
    else{
        grade='C';
    }
    return grade;
}
let student={
    name:"Raju",
    age:20,
    course:"AI&DS",
    marks:85,
    grade:getGrade(85)
}
console.log(student.name);
console.log(student.age);
console.log(student.course);
console.log(student.marks);
console.log(student.grade);