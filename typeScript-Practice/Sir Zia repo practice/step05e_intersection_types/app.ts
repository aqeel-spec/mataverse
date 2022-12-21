import { type } from "os";

interface Student {
    student_id : number;
    name : string
}

interface Teacher {
    teacher_id : number;
    teacher_name : string
}

type intersected_type = Student & Teacher;

let obj : intersected_type = {
    student_id : 5,
    name : "Rifa",
    teacher_id : 99,
    teacher_name : "Sir Zia Khan"
}
console.log(obj.student_id);
console.log(obj.teacher_name);
