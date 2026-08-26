import { getStudents } from "./students.js";

const students = getStudents();

for (const student of students) {
  console.log(student, "\n");
}
