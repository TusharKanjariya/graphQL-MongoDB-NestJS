import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateStudentInput } from "./create-student.input";
import { Student } from "./student.entity";
import { StudentService } from "./student.service";
import { StudentType } from "./student.type";

@Resolver(of => StudentType)
export class StudentResolver {
    constructor(private studentService: StudentService) { }

    @Mutation(returns => StudentType)
    async createStudent(@Args('createStudentInput') createStudent: CreateStudentInput) {
        return this.studentService.createStudent(createStudent);
    }

    @Query(returns => [StudentType])
    async students() {
        return this.studentService.getStudents();
    }

    @Query(returns => StudentType)
    async student(@Args('id') id: string) {
        return this.studentService.getStudent(id);
    }
}