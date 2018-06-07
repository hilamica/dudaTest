import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { Comment } from '../../interfaces/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() detailes: Comment;
  @Output() commentToDeleteEmitter: EventEmitter<Comment> = new EventEmitter<Comment>();

  constructor(private _commentsService: CommentsService) { }

  ngOnInit() {
  }

  removeCommment(_commentToDelete: Comment) {
    this.commentToDeleteEmitter.emit(_commentToDelete);
  }

  // edit(_comment:Comment){
  //   this._commentsService.edit(
  // }

  save(name: string, comment: string) {
    this.detailes.name = name;
    this.detailes.content = comment;


    this._commentsService.save(this.detailes).subscribe(data => {
      console.log(data);
      // this.detailes = data;
    })
  }
}
