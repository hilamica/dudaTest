import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { Comment } from '../../interfaces/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() detailes;
  @Output() commentToDeleteEmitter: EventEmitter<Comment> = new EventEmitter<Comment>();

  constructor(private _commentsService: CommentsService) { }

  ngOnInit() {
  }

  removeCommment(_commentToDelete: Comment) {
    this.commentToDeleteEmitter.emit(_commentToDelete);

    // this._commentsService.removeComment(id).subscribe(() => {

    // })
  }

}
