import { Component, OnInit } from '@angular/core';
import {PostService} from '../../service/post.service';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';

@Component({
  selector: 'app-posts-of-users',
  templateUrl: './posts-of-users.component.html',
  styleUrls: ['./posts-of-users.component.css']
})
export class PostsOfUsersComponent implements OnInit {

  constructor(private postService: PostService, private activatetRout: ActivatedRoute) {

    // ТУТ ПОМИЛКА
    this.activatetRout.params.subscribe(value => {
      this.postService.getOfPostUser(value.id).subscribe(posts => console.log(posts));
    });


  }

  ngOnInit(): void {
  }

}
