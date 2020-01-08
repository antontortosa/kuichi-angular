import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/post.service';
//import { runInThisContext } from 'vm';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  posts:any[];
  

  constructor(private service: PostService) { 
  }

  ngOnInit(){
    this.service.getAll()
    .subscribe((posts:any[])=>this.posts=posts);
  }

  createPost(input:HTMLInputElement){
    let post = { title: input.value };
    interface responseObject {id: Number}
    input.value ='';
    this.service.create(post)
    .subscribe((newPost:responseObject) =>{
      post['id'] = newPost.id
      this.posts.splice(0,0,post);
      console.log(newPost);
    },(error: Response) =>{
      if(error instanceof BadInput){
        //this.form.setErrors(error.json());
      }
      else throw error;
      
    });
  }

  updatePost(post){
    this.service.update(post)
    .subscribe(updatedPost=>{
      console.log(updatedPost);
    });
  }

  deletePost(post){
    this.service.delete(post.id)
      .subscribe(
        () =>{
        let index = this.posts.indexOf(post);
        this.posts.splice(index,1);
      },(error: AppError) =>{
        if(error instanceof NotFoundError)
          alert('This post has already been deleted.')
        else throw error;
      });
  }
}
