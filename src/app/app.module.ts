import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {UserService} from './service/user.service';
import {HttpClientModule} from '@angular/common/http';
import {UserComponent} from './components/user/user.component';
import {PostService} from './service/post.service';
import {CommentService} from './service/comment.service';
import {Router, RouterModule} from '@angular/router';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './components/comment/comment.component';
import { AllCommentComponent } from './components/all-comment/all-comment.component';
import { PostsOfUsersComponent } from './components/posts-of-users/posts-of-users.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AllUsersComponent,
    AllPostsComponent,
    PostComponent,
    CommentComponent,
    AllCommentComponent,
    PostsOfUsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'users', component: AllUsersComponent
      },
      {
        path: 'posts', component: AllPostsComponent
      },
      {
        path: 'comments', component: AllCommentComponent
      },
      {
        path: 'users:id/post', component: PostsOfUsersComponent
      }
    ])
  ],
  providers: [UserService, PostService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
