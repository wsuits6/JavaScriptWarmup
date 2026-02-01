// grade calculator with feedback
// ==============================
// by wsuits6

// Problem  brake down
// (1)  Write a Funciton

//setting varibales
studentName = "Acrobato"
//Creating student Object to be manipulated bu getGradeandComment Function
let student = {
    name : studentName,
    grade : " ",
    comment : " "
};


function getGradeAndComment(score = Range(1-100)) {
    if (score >= 90) {
        // console.log("[A] Outstanding! Keep it up!");
        //returing student object
        student.grade = "A"
        student.comment = "Outstanding! Keep it up!"
        console.log(student)
        
    } else if ( score >= 80) {
        // console.log("[B] Very good room to reach A");
        student.grade = "B";
        student.comment = "Very good room to reach A";
        console.log(student);

    } else if (score >= 70) {
        // console.log("[C] Good effort – aim higher next time");
        student.grade = "C";
        student.comment = "Good effort – aim higher next time";
        console.log(student)

    } else if (score >= 60){ 
        // console.log("[D] Passing – but needs improvement");
        student.grade = "D";
        student.comment = "Passing – but needs improvement";
        console.log(student)

    } else if (score < 60){
        // console.log("[F] You need to study more" );
        student.grade = "F";
        student.comment = "You need to study more";
        console.log(student);
    } else {
        student.grade = "F";
        student.comment = "learn more";
        console.log(student)
    }
};
//calling function in six different ways
getGradeAndComment(95)
getGradeAndComment(85)
getGradeAndComment(75)
getGradeAndComment(65)
getGradeAndComment(55)
getGradeAndComment(45)









// (2)  Accepts 0 to 100 integers  SET
// (3)  Return An object with two parameters
// (4)  use an If else ladder  =!  a Switch Statement
//  Conditionals

