// function isEven(number) {
//   return number / 2 === 0;
// }
// for (let i = 1; i <= 20; i++) {
//   if (isEven(i)) {
//     console.log(i);
//   }
// }
// //step 2
// function getGrade(marks) {
//   if (marks >= 90) {
//     return "A";
//   } else if (marks >= 80) {
//     return "B";
//   } else if (marks >= 70) {
//     return "C";
//   } else if (marks >= 60) {
//     return "D";
//   } else {
//     return "F";
//   }
// }
// console.log(getGrade(59));

// //step 3

// const students = [
//   { name: "Ali", marks: 85 },
//   { name: "Ahmed", marks: 92 },
//   { name: "Sara", marks: 76 },
//   { name: "Ayesha", marks: 64 },
//   { name: "Zain", marks: 55 },
// ];
// function getGrade(marks) {
//   if (marks >= 90) {
//     return "A";
//   } else if (marks >= 80) {
//     return "B";
//   } else if (marks >= 70) {
//     return "C";
//   } else if (marks >= 60) {
//     return "D";
//   } else {
//     return "F";
//   }
// }
// console.log(getGrade(59));
// for (const student of students) {
//   console.log(`${student.name} got a grade of ${getGrade(student.marks)}`);
// }

// //step 4

// function getRandomStudent(studentsData) {
//   let random = Math.round(Math.random() * students.length);
//   return studentsData[random];
// }
// const studentsData = [
//   { name: "Ali", marks: 85 },
//   { name: "Ahmed", marks: 92 },
//   { name: "Sara", marks: 76 },
//   { name: "Ayesha", marks: 64 },
//   { name: "Zain", marks: 55 },
// ];
// let randomStudent = getRandomStudent(students);
// console.log(randomStudent);
// console.log(`${randomStudent.name} number ${randomStudent.marks}`);

//create a function which convert pkr into usd..

// function pkrToUsd(pkr, usd) {
//   return pkr / usd;
// }
// const pkr = "90000";
// const usd = "280";
// console.log(`${pkr} pkr is equal to ${pkrToUsd(pkr, usd)} usd`);

// arrow method

// const pkrToUsd = (pkr, usd) => {
//   return pkr / usd;
// };
// console.log(`${pkr} pkr is equal to ${pkrToUsd(pkr, usd)} usd`);

// expiration method

// const pkrToUsd = function (pkr, usd) {
//   return pkr / usd;
// };
// console.log(`${pkr} pkr is equal to ${pkrToUsd(pkr, usd)} usd`);
//

// function currencyConverter(amount, rate) {
//   return amount * rate;
// }
// console.log(currencyConverter(1500, 280));
// console.log(currencyConverter(350, 0.028));

//home task:

// function convertTemperature(celsius) {
//   return (celsius * 9) / 5 + 32;
// }

// console.log(convertTemperature(25), "F");

// const studentsMarks = [
//   {
//     id: 1,
//     name: "Ali",
//     class: 11,
//     rollNo: 1,
//     marks: 55,
//   },
//   {
//     id: 2,
//     name: "Ahmad",
//     class: 11,
//     rollNo: 2,
//     marks: 60,
//   },
//   {
//     id: 3,
//     name: "Hamza",
//     class: 11,
//     rollNo: 3,
//     marks: 53,
//   },
//   {
//     id: 4,
//     name: "Nomi",
//     class: 11,
//     rollNo: 4,
//     marks: 51,
//   },
// ];
// studentsMarks.forEach((value, index) => {
//   console.log(`Name at index ${index} is ${value.name.toUpperCase()}`);
// });
// studentsMarks.forEach((value, index) => {
//   console.log(`Roll no at INDEX ${index} is ${value.rollNo}`);
// });
// const studentData = (value, index, arr) => {
//   console.log(`id at INDEX ${index} is ${value.id}`);
// };
// studentsMarks.forEach(studentData);

// const helo = studentsMarks.map((value) => {
//   if (value.marks >= 55) {
//     value.grade = "A";
//   } else {
//     value.grade = "F";
//   }
//   return value;
// });
// console.log(helo);

// const students = [
//   { name: "Ali", marks: 85, attendance: 92 },
//   { name: "Sara", marks: 35, attendance: 78 },
//   { name: "Zain", marks: 92, attendance: 65 },
//   { name: "Hina", marks: 40, attendance: 88 },
//   { name: "Bilal", marks: 55, attendance: 45 },
// ];
// let result = students.filter((student) => {
//   return students.marks > 80;
// });
// console.log(result);
// let result1 = students.find((student) => {
//   return students.name === "Ali";
// });
// console.log(result1);
// let result2 = students.findIndex((student) => {
//   return students.marks <= 38;
// });
// console.log(result2);
// let result3 = students.some((student) => {
//   return students.attendance >= 80;
// });
// console.log(result3);
// let result4 = students.every((student) => {
//   return students.attendance >= 50;
// });
// console.log(result4);

// const finalResult = students.map((student) => {
//   return student.marks;
// });
// console.log(finalResult);
// const final = finalResult.filter((value) => {
//   return value >= 40;
// });
// console.log(final);

// // step  1
// const getMarks = students.map((value) => {
//   if (value.marks >= 90) {
//     value.grade = "A";
//   } else if (value.marks >= 80) {
//     value.grade = "B";
//   } else if (value.marks >= 70) {
//     value.grade = "C";
//   } else if (value.marks >= 60) {
//     value.grade = "D";
//   } else {
//     value.grade = "F";
//   }
//   return students;
// });

// //step  2
// console.log(students);
// const result = students.filter((value) => {
//   return value.marks >= 40;
// });
// console.log(result);
// students.forEach((value) => {
//   console.log(`Name: ${value.name}    Grade: ${value.grade}`);
// });

// //step  3
// const attendance = students.some((value) => {
//   return value.attendance < 50;
// });
// console.log(
//   `${attendance}  :You will not able to seat in exam.So make sure that you attendance is above 50%`,
// );
// const appointment = students.some((value) => {
//   return value.marks >= 40;
// });
// console.log(
//   `${appointment}  : ⚠️ Not all students passed. Some students need improvement.`,
// );

// const students = [
//   { name: "Ali", marks: 85, attendance: 92 },
//   { name: "Sara", marks: 35, attendance: 78 },
//   { name: "Zain", marks: 92, attendance: 65, rollNo: 9 },
//   { name: "Hina", marks: 40, attendance: 88 },
//   { name: "Bilal", marks: 55, attendance: 45 },
// ];

// const { name, marks: studentMark, rollNo = "N/A" } = students[2];
// console.log(name, studentMark, rollNo);

// array of 10 object

const studentsData = [
  {
    id: 1,
    name: "Ali Khan",
    age: 20,
    gender: "Male",
    grade: "A",
    course: "Computer Science",
    email: "ali.khan@example.com",
  },
  {
    id: 2,
    name: "Ayesha Malik",
    age: 21,
    gender: "Female",
    grade: "B+",
    course: "Software Engineering",
    email: "ayesha.malik@example.com",
  },
  {
    id: 3,
    name: "Usman Ahmed",
    age: 22,
    gender: "Male",
    grade: "A-",
    course: "Information Technology",
    email: "usman.ahmed@example.com",
  },
  {
    id: 4,
    name: "Noor Fatima",
    age: 19,
    gender: "Female",
    grade: "A+",
    course: "Data Science",
    email: "noor.fatima@example.com",
  },
  {
    id: 5,
    name: "Hassan Raza",
    age: 23,
    gender: "Male",
    grade: "B",
    course: "Cyber Security",
    email: "hassan.raza@example.com",
  },
  {
    id: 6,
    name: "Sara Iqbal",
    age: 20,
    gender: "Female",
    grade: "A",
    course: "Artificial Intelligence",
    email: "sara.iqbal@example.com",
  },
  {
    id: 7,
    name: "Bilal Shah",
    age: 22,
    gender: "Male",
    grade: "C+",
    course: "Computer Engineering",
    email: "bilal.shah@example.com",
  },
  {
    id: 8,
    name: "Kaneez-e-Zainab",
    age: 21,
    gender: "Female",
    grade: "B-",
    course: "Business Information Systems",
    email: "zainab.46@example.com",
  },
  {
    id: 9,
    name: "Omar Farooq",
    age: 24,
    gender: "Male",
    grade: "A",
    course: "Networking",
    email: "omar.farooq@example.com",
  },
  {
    id: 10,
    name: "Maryam Asif",
    age: 20,
    gender: "Female",
    grade: "A-",
    course: "Computer Science",
    email: "maryam.asif@example.com",
  },
];

// desturcturing,,,
//
//
//
// const [, , , forthObj, , , , , ninthObj] = studentsData;
// console.log(forthObj, ninthObj);

// const [, secondObj, , , , , , , , tenthObj] = studentsData;
// console.log(secondObj, tenthObj);

// const [, , , , , , , , , tenthObj] = studentsData;
// console.log(tenthObj);

// const [firstObj] = studentsData;
// console.log(firstObj);

// rest operators...
//
//
//
// const [, , , , ...newStudents] = studentsData;
// console.log(newStudents);

// const [, , , , , , , ...weekStudent] = studentsData;
// console.log(weekStudent);

// const { id: _, ...ignore } = studentsData[4];
// console.log(ignore);

// const { id: _, age, grade, ...cut } = studentsData[4];
// console.log(cut);

// const exit = studentsData.slice(5, 9);
// console.log(exit);

// const exit = studentsData.slice(5, 6);
// console.log(exit);

// const evenIndexStudents = studentsData.filter(
//   (student, index) => index % 2 === 0,
// );
// console.log(evenIndexStudents);

// const evenIdStudents = studentsData.filter((value) => value.id % 2 === 0);
// console.log(evenIndexStudents);
