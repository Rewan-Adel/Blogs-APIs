import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';

import { Comment } from './entities/comment.entity';
import { ArticlesModule } from 'src/articles/articles.module';
@Module({
  imports:[
    ArticlesModule,
    TypeOrmModule.forFeature([Comment])
  ],
  controllers: [CommentsController],
  providers: [CommentsService]
})
export class CommentsModule {}
