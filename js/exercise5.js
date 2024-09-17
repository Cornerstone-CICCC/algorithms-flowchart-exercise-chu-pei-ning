// Accept the name and marks obtained by a student in Computer Project.
// Marks obtained.                Grade
// 80% or more                     A
// 60% or more but less than 80%.  B
// 40% or more but less than 60%.  C
// Less than 40%.                  No Grade

let student = "Julia" 
let project1 = 80
let project2 = 70
let project3 = 30
let marks = (project1 + project2 + project3) / 3 

if ( marks >= 80 ) {
      console.log("Grade A")
} else if ( marks >= 60 ) {
      console.log("Grade B")
} else if ( marks >= 40 ) {
      console.log("Grade C")
} else {
      console.log("No Grade")
}