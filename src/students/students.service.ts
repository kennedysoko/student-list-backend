import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';

// Define the shape of a Student object stored in memory
// This represents what a student looks like in our backend
type Student = {
    id: number;
    name: string;
    registrationNumber: string;
    course: string;
    year: number;
};

@Injectable()
export class StudentsService {
    // Explicitly tell TypeScript that this array will store Student objects
    private students: Student[] = [];

    // Return all students
    findAll(): Student[] {
        return this.students;
    }

    // Create a new student
    create(createStudentDto: CreateStudentDto): Student {
        // Create a new student object
        const newStudent: Student = {
            id: this.students.length + 1, // backend-controlled ID
            ...createStudentDto,          // safe, validated data
        };

        // Now TypeScript is happy because students[] expects Student objects
        this.students.push(newStudent);

        return newStudent;
    }
}
