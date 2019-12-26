import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/post.service';
//import { runInThisContext } from 'vm';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit{

  posts:any[];
  

  constructor(private service: PostService) { 
  }

  ngOnInit(){
    this.service.getsPosts()
    .subscribe((response:any[])=>{
      this.posts=response;
    },error =>{
      alert('An unexpected error ocurred.');
      console.log(error);
    });
  }

  createPost(input:HTMLInputElement){
    let post = { title: input.value };
    input.value ='';
    this.service.createPost(post)
    .subscribe(response =>{
      post['id'] = response.id;
      this.posts.splice(0,0,post);
      console.log(response);
    },(error: Response) =>{
      if(error.status === 400){
        //this.form.setErrors(error.json());
      }
      else{ 
        alert('An unexpected error ocurred.');
        console.log(error);
      }
    });
  }

  updatePost(post){
    this.service.updatePost(post)
    .subscribe(response=>{
      console.log(response);
    },error =>{
      alert('An unexpected error ocurred.');
      console.log(error);
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
        alert('An unexpected error ocurred.');
        console.log(error);
      });
  }
}
