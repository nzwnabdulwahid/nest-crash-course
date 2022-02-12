import { Module } from '@nestjs/common';
import { PostService } from './services/post.service';
import { PostController } from './controllers/post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedPostEntity } from './models/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FeedPostEntity])],
  providers: [PostService],
  controllers: [PostController],
})
export class PostModule {}
