import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {PostService} from '../../service/post.service';
import {CommentService} from '../../service/comment.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;
  constructor(private postService: PostService, private  commentSecvice: CommentService) { }

  ngOnInit(): void {
  }


}
