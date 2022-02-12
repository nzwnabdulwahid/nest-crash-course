import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { FeedPost } from '../models/post.interface';
import { PostService } from '../services/post.service';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}
  @Post()
  create(@Body() post: FeedPost): Observable<FeedPost> {
    return this.postService.createPost(post);
  }

  @Get()
  findAll(): Observable<FeedPost[]> {
    return this.postService.findAllPost();
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() feedPost: FeedPost,
  ): Observable<UpdateResult> {
    return this.postService.update(id, feedPost);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.postService.delete(id);
  }
}
