function isEven(number) {
  return number / 2 === 0;
}
for (let i = 1; i <= 20; i++) {
  if (isEven(i)) {
    console.log(i);
  }
}
//step 2
function getGrade(marks) {
    if (marks >= 90) {
        return "A";
    } else if (marks >= 80) {
        return "B";
    } else if (marks >= 70) {
        return "C";
    } else if (marks >= 60) {
        return "D";
    } else {
        return "F";
    }
    console.log(getGrade(59));
  