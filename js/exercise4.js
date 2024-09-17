//Write an algorithm and draw a flowchart to check the three number inputs whether a triangle is possible or not.

let a = 5
let b = 5
let c = 9
 
if ((a + b) > c) {
      if ((a + c) > b) {
            if ((b + c) > a) {
                  console.log("triangle is Possible")
            } else {
                  console.log("triangle is Impossible")
            }
      } else {
            console.log("triangle is Impossible")
      }
} else {
      console.log("triangle is Impossible")
}