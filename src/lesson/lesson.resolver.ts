import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { AssignStudentToLessonInput } from "./assign-student-to-lesson.input";
import { CreateLessonInput } from "./lesson.input";
import { LessonService } from "./lesson.service";
import { LessonType } from "./lesson.type";

@Resolver(of => LessonType)
export class LessonResolver {
    constructor(private lessonService: LessonService) { }
    @Query(returns => LessonType)
    lesson(@Args('id') id: string) {
        return this.lessonService.getLesson(id);
    }

    @Query(returns => [LessonType])
    lessons() {
        return this.lessonService.getLessons();
    }

    @Mutation(returns => LessonType)
    createLesson(@Args('createLessonInput') createLesson: CreateLessonInput) {
        return this.lessonService.createLesson(createLesson);
    }

    @Mutation(returns => LessonType)
    assignStudentToLesson(@Args('assignStudentToLesson') assignStudentLesson: AssignStudentToLessonInput) {
        const { lessonId, studentId } = assignStudentLesson;
        return this.lessonService.assignStudentsToLesson(lessonId, studentId);
    }
}