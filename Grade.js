function getGrade(score){
    let grade;
    if(score>=80){
        grade='A';
    }
    else if(score>=70){
        grade='B';
    }
    else if(score>=60){
        grade='C';
    }
    else if(score>=50){
        grade='D';
    }
    else if(score>=40){
        grade='E';
    }
    else{
        grade='F';
    }
    return grade;
}
let student={
    name:"Raju",
    age:20,
    course:"AI&DS",
    marks:75,
    grade:getGrade(75)
}
console.log(student.name);
console.log(student.age);
console.log(student.course);
console.log(student.marks);
console.log(student.grade);