import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson/lesson.entity';
import { LessonModule } from './lesson/lesson.module';
import { Student } from './student/student.entity';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://tushar:tushar12345@cluster0.ry4fz.mongodb.net/school?retryWrites=true&w=majority',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [
        Lesson, Student
      ]
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      driver: ApolloDriver
    }), LessonModule, StudentModule],
})
export class AppModule { }
