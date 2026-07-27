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



  //step 3


  const students = [
    { name: "Ali", marks: 85 },
    { name: "Ahmed", marks: 92 },
    { name: "Sara", marks: 76 },
    { name: "Ayesha", marks: 64 },
    { name: "Zain", marks: 55 }
  ];
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
  for (const student of students) {
    console.log(`${student.name} got a grade of ${getGrade(student.marks)}`);
}

//step 4
