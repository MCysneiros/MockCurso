import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '../database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'node:path/win32';
import { ApolloDriver } from '@nestjs/apollo';
import { StudentResolver } from './graphql/resolvers/students.resolver';
import { EnrollmentsResolver } from './graphql/resolvers/enrollments.resolver';
import { CoursesResolver } from './graphql/resolvers/courses.resolver';
import { EnrollmentsService } from '../services/enrollments.service';
import { CoursesService } from '../services/courses.service';
import { StudentsService } from '../services/students.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [
    StudentResolver,
    EnrollmentsResolver,
    CoursesResolver,
    EnrollmentsService,
    CoursesService,
    StudentsService,
  ],
})
export class HttpModule {}
