import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentsService {
    findAll() {
        return [
            {
                id: 1,
                name: 'John Doe',
                course: 'Computer Science',
                year: 2,
            },
        ];
    }
}
