import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';

@Injectable()
export class StudentsService {
    // Temporary in-memory storage (we will replace with DB later)
    private students = [];

    // Return all students
    findAll() {
        return this.students;
    }

    // Create a new student
    create(createStudentDto: CreateStudentDto) {
        // Generate a fake ID (database will do this later)
        const newStudent = {
            id: this.students.length + 1,
            ...createStudentDto, // spread validated DTO data
        };

        // Save student in memory
        this.students.push(newStudent);

        // Return created student
        return newStudent;
    }
}
