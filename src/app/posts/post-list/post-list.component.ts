import { Component, Input, OnInit } from '@angular/core';
import {Post} from '../post.model';
import {PostsService} from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent  implements OnInit {

  posts : Post[] = [] ;

  constructor(public postsService: PostsService){
  }

  ngOnInit() {
    this.posts = this.postsService.getPosts();

  }

}
