import { Controller, Get } from '@nestjs/common';

@Controller('students')
export class StudentsController {
  @Get()
  findAll() {
    return [
      {
        id: 1,
        fullName: 'Kennedy Soko',
        registrationNumber: 'UNIMA/2022/001',
        programme: 'Information Systems',
        year: 4,
      },
      {
        id: 2,
        fullName: 'Lusper Mhango',
        registrationNumber: 'UNIMA/2022/002',
        programme: 'Computer Science',
        year: 4,
      },
    ];
  }
}
