// This class defines the shape of data
// that is allowed when creating a student

export class CreateStudentDto {
    // Student full name
    name: string;

    // Unique registration number
    registrationNumber: string;

    // Course the student is enrolled in
    course: string;

    // Year of study (e.g. 1, 2, 3, 4)
    year: number;
}
