import { Component, OnInit } from '@angular/core';
import {CommentService} from '../../service/comment.service';

@Component({
  selector: 'app-all-comment',
  templateUrl: './all-comment.component.html',
  styleUrls: ['./all-comment.component.css']
})
export class AllCommentComponent implements OnInit {

  comment: Comment[];

  constructor(private commentService: CommentService) {
    // ТУТ ПОМИЛКА
    // this.commentService.getComment().subscribe(value => this.comment = value);
  }

  ngOnInit(): void {
  }

}
