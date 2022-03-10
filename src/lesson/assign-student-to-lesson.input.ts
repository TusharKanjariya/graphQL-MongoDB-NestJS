import { Field, ID, InputType } from "@nestjs/graphql";
import { IsUUID } from "class-validator";

@InputType()
export class AssignStudentToLessonInput {
    @Field(type => [ID])
    @IsUUID("4", { each: true })
    studentId: string[];

    @Field(type => ID)
    @IsUUID()
    lessonId: string
}