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
    this.service.getsPosts()
    .subscribe((response:any[])=>{
      this.posts=response;
    });
  }

  createPost(input:HTMLInputElement){
    let post = { title: input.value };
    interface responseObject {id: Number}
    input.value ='';
    this.service.createPost(post)
    .subscribe((response:responseObject) =>{
      post['id'] = response.id
      this.posts.splice(0,0,post);
      console.log(response);
    },(error: Response) =>{
      if(error instanceof BadInput){
        //this.form.setErrors(error.json());
      }
      else throw error;
      
    });
  }

  updatePost(post){
    this.service.updatePost(post)
    .subscribe(response=>{
      console.log(response);
    });
  }

  deletePost(post){
    this.service.deletePost(post.id)
      .subscribe(response =>{
        let index = this.posts.indexOf(post);
        this.posts.splice(index,1);
        console.log(response);
      },(error: AppError) =>{
        if(error instanceof NotFoundError)
          alert('This post has already been deleted.')
        else throw error;
      });
  }
}
