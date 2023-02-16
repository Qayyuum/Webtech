import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts/post.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{

  messages = " Sample Messages";

  constructor(public postService: PostsService){

  }

  ngOnInit(){
    this.messages = this.postService.setHeaderMessage(this.messages);
  }

}
