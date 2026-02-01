// grade calculator with feedback
// ==============================

// by wsuits6

// Problem  brake down
// (1)  Write a Funciton
// (2)  Accepts 0 to 100 integers  SET
// (3)  Return An object with two parameters
// (4)  use an If else ladder  =!  a Switch Statement
// //  Conditionals
// ≥ 90 → "A" → "Outstanding! Keep it up!"
// ≥ 80 → "B" → "Very good – room to reach A"
// ≥ 70 → "C" → "Good effort – aim higher next time"
// ≥ 60 → "D" → "Passing – but needs improvement"
// < 60 → "F" → "You need to study more"


const banner = `
:+++++++++++++++++++++++++++:
+++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++
++++=. .+++: .=+=.....-+++++*
++++=. .+++:  =+++-.    :****
++++=. .+++:  =+++++++. .=***
+++++. .+++:  -++++++-. :****
+++++.                 .-+***
+++++. .+++:  -+++++++= ..***
+++++. .+++:  =++******:..=**
+++++. .+++:  =**=.:::.  .***
+++++...+++: .=+........=****
+++++++++++******************
+++++++++********************
:+++++++********************-
`;

const grading_system_banner = `
                                                                                      
                                                                                      
 ▄████  ▄▄▄▄   ▄▄▄  ▄▄▄▄  ▄▄ ▄▄  ▄▄  ▄▄▄▄   ▄█████ ▄▄ ▄▄  ▄▄▄▄ ▄▄▄▄▄▄ ▄▄▄▄▄ ▄▄   ▄▄   
██  ▄▄▄ ██▄█▄ ██▀██ ██▀██ ██ ███▄██ ██ ▄▄   ▀▀▀▄▄▄ ▀███▀ ███▄▄   ██   ██▄▄  ██▀▄▀██   
 ▀███▀  ██ ██ ██▀██ ████▀ ██ ██ ▀██ ▀███▀   █████▀   █   ▄▄██▀   ██   ██▄▄▄ ██   ██   
                                                                                      
`
console.log(banner);
console.log(grading_system_banner)


//setting varibales
studentName = "Acrobato"
//Creating student Object to be manipulated bu getGradeandComment Function
let student = {
    name : studentName,
    grade : " ",
    comment : " ",
    score_pecerntage: ""
};

// //restricting score to only 1 and 100
// let score = {
//     form: 0,
//     to: 100
//     // if score >100;
//     // catch.error();
    
// };

function getGradeAndComment(score = 0) {
    if (score < 0 || score > 100) {
        student.grade = "NULL"
        student.comment = "INVALID GRADE"
        student.score_pecerntage = "INVALID GRADE"

        //checking range 1 - 100
        console.log("==========================")
        console.log(student)
        return
    }
    //validation must happen beire coding 
    if (score >= 90) {
        // console.log("[A] Outstanding! Keep it up!");
        //returing student object
         if (score > 100){
        console.log("INVALID GRADE")
    }
        student.grade = "A"
        student.score_pecerntage = score;
        student.comment = "Outstanding! Keep it up!"
        console.log(student)
        
    } else if ( score >= 80) {
        // console.log("[B] Very good room to reach A");
        student.grade = "B";
        student.score_pecerntage = score;
        student.comment = "Very good room to reach A";
        console.log(student);

    } else if (score >= 70) {
        // console.log("[C] Good effort – aim higher next time");
        student.grade = "C";
        student.score_pecerntage = score;
        student.comment = "Good effort – aim higher next time";
        console.log(student)

    } else if (score >= 60){ 
        // console.log("[D] Passing – but needs improvement");
        student.grade = "D";
        student.score_pecerntage = score;
        student.comment = "Passing – but needs improvement";
        console.log(student)

    } else if (score < 60){
        // console.log("[] You need to study more" );
        student.grade = "F";
        student.score_pecerntage = score;
        student.comment = "You need to study more";
        console.log(student);
    } 
};
//calling function in six different ways
getGradeAndComment(95)
getGradeAndComment(85)
getGradeAndComment(75)
getGradeAndComment(65)
getGradeAndComment(55)
getGradeAndComment(5)


//testing GRADE RANG 1 - 100
console.log("============================")
getGradeAndComment(1003)