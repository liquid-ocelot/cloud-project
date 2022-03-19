import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Truitter';

  form = {title: "", body: ""}

  post_list: {id: number, title:string, body:string, published:boolean}[] = [];

  constructor(private postService: PostService){

  }

  async ngOnInit(){
    this.post_list = await this.postService.getPost()
  }

  async createPost(){
    await this.postService.postPost(this.form.title, this.form.body)
    this.post_list = await this.postService.getPost()
  }
}
