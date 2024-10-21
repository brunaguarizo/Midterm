const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

/* ----------------------------------- INSTRUCTIONS  -----------------------------------
Create a function that simulates a student midterm exam grading system. The function will take in a student's name and their exam score.

- If the student's score is 86 or above, display "Excellent! [Student Name] has an A."
- If the score is between 72 and 85, display "Great job! [Student Name] has a B."
- If the score is between 60 and 71, display "Good effort! [Student Name] has a C."
- If the score is between 50 and 59, display "Needs improvement. [Student Name] has a D."
- If the score is below 50, display "Fail. [Student Name] has a F."

CHALLENGE (SAVE FOR LAST):
- If the student's score is within 2 points of the next grade bracket, display "Almost there! [Student Name] is close to a [next grade]."
  -For example, 48 would give you "Almost there! [Student Name] is close to a D."
- If the student's score is within 2 points of the previous grade bracket, display "Work Hard! [Student Name] is almost falling to [previous grade]."
  -For example, 52 would give you "Work Hard! [Student Name] is almost falling to F."
----------------------------------- INSTRUCTIONS  ----------------------------------- */


/* ----------------------------------- PLANNING -----------------------------------
Question: What is your name?
variable studentName

Question: What is your score?
variable studentScore

studentScore is >= 86: "Excellent! [Student Name] has an A."
studentScore is >=72 && <=85: "Great job! [Student Name] has a B."
studentScore is >=60 && <=71: "Good effort! [Student Name] has a C."
studentScore is >=50 && <=59: "Needs improvement. [Student Name] has a D."
studentScore is >50: "Fail. [Student Name] has a F."

studentScore within 2 points of the next grade: Almost there! [Student Name] is close to a [next grade].
studentScore within 2 points of the previous grade: Work Hard! [Student Name] is almost falling to [previous grade].

----------------------------------- PLANNING ----------------------------------- */


//determine a proper function name and parameter variable name
function GradeSystem(paramName, paramScore){
let studentName = paramName;
let studentScore = paramScore;

  //write your code here
if (studentScore >= 86){
  console.log("Excellent! ", studentName, " has an A.");
} else if (studentScore >=72 && studentScore <=85){
  console.log("Great job! ", studentName, " has a B.");
} else if (studentScore >=60 && studentScore <=71){
  console.log("Good effort! ", studentName, " has a C.");
} else if (studentScore >=50 && studentScore <=59){
  console.log("Needs improvement. ", studentName, " has a D.");
} else if (studentScore <50){
  console.log("Fail. ", studentName, " has a F.");
} 

}


//determine the student name
readline.question("What is your name? ", (_studentName) => {
      
      //make an infinite recall
      function StartGame() {
    
        //determine the sudent score
        readline.question("What is your score? ", (_studentScore) => {
          
          //call your function here
          GradeSystem (_studentName, Number(_studentScore));

          if (_studentScore === "quit") {
            readline.close();
          } else {
                StartGame();
              
          }
        });
      }
    
      StartGame();
    });