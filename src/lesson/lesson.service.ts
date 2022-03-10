import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
import { v4 as uuid } from 'uuid';
import { CreateLessonInput } from './lesson.input';

@Injectable()
export class LessonService {
    constructor(@InjectRepository(Lesson) private lessionRepository: Repository<Lesson>) { }

    async createLesson(createLesson: CreateLessonInput) {
        const { name, startDate, endDate, students } = createLesson;
        const lesson = this.lessionRepository.create({
            id: uuid(), name, startDate, endDate, students
        });
        return this.lessionRepository.save(lesson);
    }

    getLessons() {
        return this.lessionRepository.find();
    }

    async getLesson(id: string) {
        return this.lessionRepository.findOne({ id });
    }

    async assignStudentsToLesson(lessonId: string, studentId: string[]) {
        const lesson = await this.lessionRepository.findOne({ id: lessonId });
        lesson.students = [...lesson.students, ...studentId];
        return this.lessionRepository.save(lesson);
    }
}
